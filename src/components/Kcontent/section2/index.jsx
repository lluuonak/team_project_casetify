import { Section2Style } from './style';

const Section2 = () => {
    return (
        <Section2Style>
            <div className="images">
                <div className="image-wrapper-left">
                    <img src="/images/Kcontent/오징어게임 (4).jpg" alt="left" />
                </div>
                <div className="image-wrapper-right">
                    <img src="/images/Kcontent/오징어게임 (6).jpg" alt="right" />
                </div>
                <div className="image-wrapper-top">
                    <img src="/images/Kcontent/kcontent-logo.png" alt="logo" />
                </div>
                <div className="text">
                    <p>K-CONTENT × 케이스티파이 한정판</p>
                    <h2>전 세계가 주목한 그 장면을 내 손안에서</h2>
                    <p>
                        전 세계가 열광한 K-콘텐츠를 일상 속으로 가져왔습니다. 상징적인 모양과 색,
                        디테일한 연출까지 ‘오징어 게임’의 <br />
                        감성을 그대로 담았습니다. 가장 한국적인 세계관을 케이스 하나로 경험해보세요.
                    </p>
                </div>
            </div>
        </Section2Style>
    );
};

export default Section2;
