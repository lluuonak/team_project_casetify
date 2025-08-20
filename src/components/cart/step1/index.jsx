import { useSelector } from 'react-redux';
import OrderNav from '../../orderNav';
import Banner from './Banner';
import Empty from './Empty';
import Fill from './Fill';
import { Section1Style } from './style';

const Section1 = () => {
    const { cart } = useSelector((state) => state.cart);
    return (
        <Section1Style>
            <div className="inner">
                <OrderNav page={'cart'} />
                {cart.length > 0 ? <Fill /> : <Empty />}
            </div>
        </Section1Style>
    );
};

export default Section1;
