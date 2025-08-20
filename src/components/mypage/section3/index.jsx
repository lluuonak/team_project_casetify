import { useState } from 'react';
import { Section3Style } from './style';

const Section3 = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const navItems = ['casetify news', '프로모션 소개', '채용공고'];
    return (
        <Section3Style>
            <div className="inner">
                <div className="left">
                    <h3>케이스티파이 소식</h3>
                    <ul className="nav-tap">
                        {navItems.map((text, idx) => (
                            <li
                                key={idx}
                                className={activeIndex === idx ? 'on' : ''}
                                onClick={() => setActiveIndex(idx)}
                            >
                                {text}
                            </li>
                        ))}
                    </ul>
                    <ul className="context">
                        <li>
                            <span>주문이 접수된 후에 주문변경이 가능한가요?</span>
                        </li>
                        <li>
                            <span>
                                주문이 잘 되었는지 확인 하고 싶어요. 어떻게 확인할 수 있나요?
                            </span>
                        </li>
                        <li>
                            <span>
                                비회원으로 주문한 경우, 주문 추적을 하려면 어떻게 해야 하나요?
                            </span>
                        </li>
                        <li>
                            <span>
                                할인코드가 적용된 주문을 취소할 경우 할인/바우처 코드를 다시
                                사용할수 있나요?
                            </span>
                        </li>
                    </ul>
                </div>
                <img className="right" src="/images/mypage/Stickers 2.png" alt="" />
            </div>
        </Section3Style>
    );
};

export default Section3;
