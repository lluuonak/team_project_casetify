import { Outlet } from 'react-router-dom';
import TitleSection from '../../components/title';

const Cart = () => {
    return (
        <>
            <TitleSection title={'CART'} />
            <Outlet />
            {/* <Section1 /> */}
        </>
    );
};

export default Cart;
