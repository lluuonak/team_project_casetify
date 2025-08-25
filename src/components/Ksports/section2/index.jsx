import { Section2Style } from './style';

const Section2 = () => {
    return (
        <Section2Style>
            <div className="images">
                <div className="image-wrapper-left">
                    <img src="/images/Ksports/Ksp_2.jpg" alt="left" />
                </div>
                <div className="image-wrapper-right">
                    <img src="/images/Ksports/Ksp_1.jpg" alt="right" />
                </div>
                <div className="image-wrapper-top">
                    <img src="/images/Ksports/ksports-logo.png" alt="logo" />
                </div>
                <div className="text">
                    <p>KBO × 케이스티파이 한정판</p>
                    <h2>"팬심을 스타일로 표현하는 법"</h2>
                    <p>
                        응원하는 팀의 상징을 손안에 담을 수 있습니다.
                        <br /> 프로야구 10개 구단의 정체성을 그대로 담은 디자인으로 유니폼과 로고로
                        디자인된 케이스로 팬심을 표현해보세요.
                    </p>
                </div>
            </div>
        </Section2Style>
    );
};

export default Section2;
