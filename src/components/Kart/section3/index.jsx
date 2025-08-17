import { Section3Style } from './style';
import KcontentData from '../../../assets/KcontentData';
import ListItem from './ListItem';

const Section3 = () => {
    return (
        <Section3Style className="products">
            <div className="product-text">
                <p>K-CONTENT CASE</p>
            </div>
            <ul className="product-item">
                {KcontentData[0].data.map((item) => (
                    <ListItem key={item.id} data={item} parentId={KcontentData[0].id} />
                ))}
            </ul>
            <div className="footer-banner">
                <img src="../public/images/Kcontent/KC-bcak1.png" alt="" />
            </div>
        </Section3Style>
    );
};

export default Section3;
