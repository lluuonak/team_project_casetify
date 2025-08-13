import { Section1Style } from './style';
import data from '../../../assets/colabSection1Data';
import { useState, useEffect } from 'react';

const Section1 = () => {
    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    const [isTextAnimating, setIsTextAnimating] = useState(false);
    const [isBoxAnimating, setIsBoxAnimating] = useState(false);

    useEffect(() => {
        const cycleDuration = 5000; // 5초 주기

        const mainInterval = setInterval(() => {
            // 1. 텍스트 즉시 등장 (0초)
            setIsTextAnimating(true);
            setTimeout(() => {
                setIsTextAnimating(false);
            }, 100); // 빠른 등장

            // 2. 0.6초 후 박스 등장
            setTimeout(() => {
                setIsBoxAnimating(true);
                setTimeout(() => {
                    setIsBoxAnimating(false);
                }, 100); // 빠른 등장
            }, 600);

            // 3. 4초 후 텍스트와 박스 동시에 사라짐
            setTimeout(() => {
                setIsTextAnimating(true);
                setIsBoxAnimating(true);

                // 사라진 후 다음 세트로 변경
                setTimeout(() => {
                    setCurrentSetIndex((prev) => (prev + 1) % data.length);
                }, 500);
            }, 4000);
        }, cycleDuration);

        return () => clearInterval(mainInterval);
    }, []);

    // const animationClass = isAnimate ? 'slide-out' : 'slide-in';

    return (
        <Section1Style>
            <div className="flex-1 flex flex-col items-center justify-center mb-12">
                <div
                    className={`text-center transition-all duration-500 ease-in-out transform ${
                        isTextAnimating ? 'translate-y-16 opacity-0' : 'translate-y-0 opacity-100'
                    }`}
                >
                    <h1 className="text-white text-6xl font-semibold mb-6">
                        {data[currentSetIndex].title}
                    </h1>
                    <p className="text-white text-2xl font-medium opacity-80">
                        {data[currentSetIndex].desc}
                    </p>
                </div>
            </div>
        </Section1Style>
        //     <Section1Style>
        //     <main className="visual-banner">
        //         {/* 비주얼 배너 아래 정보 다 api로 map ? 이거 모듈 사용해서 상태변경 타이머 ...*/}
        //         <div className="visual-image">
        //             <img src="./images/colab/치이카와_visual.jpg" alt="" />
        //             <div class="gradient-overlay"></div>
        //         </div>
        //         <div className="new-product">
        //             <div className="title">
        //                 <h2>Chiikawa × CASETiFY</h2>
        //                 <p>“귀여움과 실용 사이, Chiikawa의 여름 휴가 ”</p>
        //             </div>
        //             {/* view more 애프터로 추가 */}
        //             <div className="new-product-list">{/* 컴포넌트 map */}</div>
        //         </div>
        //     </main>
        // </Section1Style>
    );
};

export default Section1;
