import OrderNav from '../../../orderNav';
import OrderItemInfo from './OrderItemInfo';
import { Section1Style } from './style';

const Section1 = () => {
    return (
        <Section1Style>
            <div className="inner">
                <OrderNav page={'order'} />
                <OrderItemInfo />
            </div>
        </Section1Style>
    );
};

export default Section1;
