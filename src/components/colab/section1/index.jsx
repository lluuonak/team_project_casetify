import { Section1Style } from './style';
import data from '../../../assets/colabSection1Data';

const Section1 = () => {
    const { id, title, desc, img, product } = data;
    
    return (
        <Section1Style>
            <main className="visual-banner">
                {/* 비주얼 배너 아래 정보 다 api로 map ? 이거 모듈 사용해서 상태변경 타이머 ...*/}
                <div className="visual-image">
                    <img src="./images/colab/치이카와_visual.jpg" alt="" />
                    <div class="gradient-overlay"></div>
                </div>
                <div className="new-product">
                    <div className="title">
                        <h2>Chiikawa × CASETiFY</h2>
                        <p>“귀여움과 실용 사이, Chiikawa의 여름 휴가 ”</p>
                    </div>
                    {/* view more 애프터로 추가 */}
                    <div className="new-product-list">{/* 컴포넌트 map */}</div>
                </div>
            </main>
        </Section1Style>
    );
};

export default Section1;
