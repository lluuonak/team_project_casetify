import { Outlet, useLocation } from 'react-router-dom';
import TitleSection from '../../components/title';

const Cart = () => {
    const location = useLocation();

    // step3 라우트일 때만 숨김
    const isStep3 = location.pathname.includes('/step3');
    return (
        <>
            {!isStep3 && <TitleSection title={'CART'} />}
            <Outlet />
        </>
    );
};

export default Cart;
