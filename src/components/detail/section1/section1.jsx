import { useSelector } from 'react-redux';
import { Section1Style } from '../style';
import SelectPartial from './SelectPartial';

const Section1 = () => {
    const { currentData } = useSelector((state) => state.detail);
    const { type, name, firstTitle, secondTitle, forPhone, caseData } = currentData;

    console.log(type);

    return (
        <Section1Style>
            <div className="inner">
                <div className="image-area">
                    <div className="left">
                        <div className="img">
                            <img src={`/images/detail/phone/${caseData.folder}/3.png`} alt="" />
                        </div>
                        <div className="img">
                            <img src={`/images/detail/phone/${caseData.folder}/2.webp`} alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <img src={`/images/detail/phone/${caseData.folder}/1.webp`} alt="" />
                    </div>
                </div>
                <div className="info-area">
                    <div className="top">
                        <div className="price">
                            <span>{name}</span>
                            <span>₩{caseData.price.toLocaleString()}</span>
                        </div>
                        <div className="context">
                            <span className="first">{firstTitle}</span>
                            <span className="second">{secondTitle}</span>
                        </div>
                    </div>
                    <div className="bottom">
                        {type === 'phone' && <SelectPartial forPhone={forPhone} />}
                        <div className="protected">
                            <strong className="label">보호성능</strong>
                            <span>기본</span>
                            <strong className="label">무게</strong>
                            <span>가벼움</span>
                        </div>
                        <div className="color">
                            <strong className="label">색상</strong>
                            <ul>
                                <li style={{ backgroundColor: 'white' }} className="white"></li>
                                <li style={{ backgroundColor: '#D3BDAF' }} className="ibory"></li>
                                <li style={{ backgroundColor: '#EDBAD2' }} className="pink"></li>
                                <li
                                    style={{ backgroundColor: '#2D59C5' }}
                                    className="light-blue"
                                ></li>
                                <li style={{ backgroundColor: '#000080' }} className="blue"></li>
                                <li style={{ backgroundColor: '#000' }} className="black"></li>
                            </ul>
                        </div>
                        <div className="buy">BUY NOW</div>
                        <div className="fn-btns">
                            <span>ADD TO CART</span>
                            <span>WISH LIST</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <strong>Product Features</strong>
                <img src="/images/detail/phone/phone.png" alt="" />
            </div>
        </Section1Style>
    );
};

export default Section1;
