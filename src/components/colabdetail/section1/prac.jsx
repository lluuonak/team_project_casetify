import { useEffect, useRef } from 'react'; // useRef, useEffect 임포트 추가
import { Section1Style } from './style';
import gsap from 'gsap';
// Draggable은 사용되지 않으므로 제거

// HorizontalLoop 함수는 컴포넌트 외부에 정의하거나,
// React Hook 형태로 만들어 사용하는 것이 좋습니다.
// 여기서는 컴포넌트 밖으로 분리하여 재정의했습니다.
const horizontalLoop = (items, config) => {
  // GSAP가 로드되지 않은 경우를 위한 폴백
  if (!gsap) {
    console.warn('GSAP가 로드되지 않았습니다.');
    return;
  }

  items = gsap.utils.toArray(items);
  config = config || {};

  const tl = gsap.timeline({
    repeat: config.repeat,
    paused: config.paused,
    defaults: { ease: 'none' },
    onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
  });

  const length = items.length;
  const pixelsPerSecond = (config.speed || 1) * 100;

  // 모든 아이템의 총 너비를 계산하여 루프 애니메이션 설정
  let totalWidth = 0;
  items.forEach(item => {
    totalWidth += item.offsetWidth + (parseFloat(config.paddingRight) || 0);
  });

  gsap.set(items, { x: 0 });

  tl.to(items, {
    x: -totalWidth,
    duration: totalWidth / pixelsPerSecond,
    ease: 'none',
  });

  // GSAP 3.x에서 권장하는 루프
  gsap.to(items, {
    x: `+=${totalWidth}`,
    duration: totalWidth / pixelsPerSecond,
    ease: 'none',
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => parseFloat(x) % totalWidth),
    },
  });

  return tl;
};

// Section1 컴포넌트
const Section1 = ({ data }) => {
  const { title, category } = data;
  const marqueeRef = useRef(null);
  const loopRef = useRef(null);

  useEffect(() => {
    // 이미 로드된 GSAP를 사용하므로 동적 스크립트 로딩 로직은 제거
    if (marqueeRef.current) {
      const items = marqueeRef.current.querySelectorAll('.marquee-item');
      if (items.length > 0) {
        // 모든 아이템을 포함하는 .marquee-container를 선택자로 사용
        const container = marqueeRef.current;

        const loop = gsap.fromTo(items, {
          x: '0%',
        }, {
          x: '-100%',
          duration: 30, // 적절한 값으로 조절
          repeat: -1,
          ease: 'linear',
          paused: false,
        });

        // 호버 이벤트
        const handleMouseEnter = () => loop.pause();
        const handleMouseLeave = () => loop.play();

        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);

        // 컴포넌트 언마운트 시 이벤트 리스너 제거
        return () => {
          container.removeEventListener('mouseenter', handleMouseEnter);
          container.removeEventListener('mouseleave', handleMouseLeave);
          loop.kill(); // 애니메이션 정리
        };
      }
    }
  }, [category]);


  return (
    <Section1Style>
      <h2>{title.toUpperCase()}</h2>
      <div className="marquee-container" ref={marqueeRef}>
        <div className="marquee-wrap">
          {category.map(({ id, title: itemTitle, img }) => (
            <article className="marquee-item" key={id}>
              <a href="#0">
                <figure className="member-img-wrapper">
                  <img
                    className="member-img"
                    width="700"
                    height="700"
                    src={img}
                    alt={itemTitle}
                  />
                </figure>
                <figcaption className="member-details">
                  <h3 className="member-title">{itemTitle}</h3>
                </figcaption>
              </a>
            </article>
          ))}
        </div>
      </div>
    </Section1Style>
  );
};

export default Section1;