import { Section3Style } from './style';
import KsportsData from './KsportsData';
import ListItem from './ListItem';

const Section3 = () => {
    return (
        <Section3Style className="products">
            <div className="product-text">
                <p>K-CONTENT CASE</p>
            </div>
            <ul className="product-item">
                {KsportsData[0].data.map((item) => (
                    <ListItem key={item.id} data={item} parentId={KsportsData[0].id} />
                ))}
            </ul>
            <div className="footer-banner">
                <img src="../public/images/Ksports/Kbcak1.jpg" alt="" />
            </div>
        </Section3Style>
    );
};

export default Section3;
