import { Section2Style } from './style';

const Section2 = () => {
    return (
        <Section2Style>
            <div className="images">
                <div className="image-wrapper-left">
                    <img src="/images/kart/국립중앙 박물관 콜라보 컨텐츠 7.jpg" alt="left" />
                </div>
                <div className="image-wrapper-right">
                    <img src="/images/kart/국립중앙 박물관 콜라보 컨텐츠 12.png" alt="right" />
                </div>
                <div className="image-wrapper-top">
                    <img src="/images/Kart/kart-logo.png" alt="logo" />
                </div>
                <div className="text">
                    <p>K-ART × 케이스티파이 한정판</p>
                    <h2>전통이 일상에 스며드는 순간</h2>
                    <p>
                        예술의 유산을 일상으로 가져와 케이스로 재탄생 했습니다.
                        <br />
                        한국의 전통 회화를 현대적인 감각으로 재해석한 다양한 디자인을 통해서
                        <br />
                        시간을 넘어 전해지는 아름다움을, 지금 손안에서 느껴보세요.
                    </p>
                </div>
            </div>
        </Section2Style>
    );
};

export default Section2;
