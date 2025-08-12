import { Section3Style } from './style';
import KsportsData from '../../../assets/KsportsData';
import ListItem from './ListItem';

const Section3 = () => {
    return (
        <Section3Style className="products">
            {KsportsData.map((category) => (
                <div className="product-text" key={category.id}>
                    <p>{category.strong}</p>
                    <ul className="product-item" key={category.id}>
                        {category.data.map((item) => (
                            <ListItem key={item.id} data={item} parentId={category.id} />
                        ))}
                    </ul>
                </div>
            ))}

            <div className="footer-banner">
                <img src="../public/images/Ksports/Kbcak1.jpg" alt="" />
            </div>
        </Section3Style>
    );
};

export default Section3;
