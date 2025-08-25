import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import TitleSection from '../../components/title';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authActions } from '../../store/modules/common/authSlice';

const Cart = () => {
    const { isLogin } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isLogin === 'false' || isLogin === false) {
            console.log(isLogin);
            navigate('/');
            dispatch(authActions.setLoginModalState(true));
        }
    }, [isLogin]); // ✅ isLogin을 의존성에 추가

    const location = useLocation();
    const isStep3 = location.pathname.includes('/step3');
    // step3 라우트일 때만 숨김
    return (
        <>
            {!isStep3 && <TitleSection title={'CART'} />}
            <Outlet />
        </>
    );
};

export default Cart;
