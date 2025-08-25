import { useDispatch, useSelector } from 'react-redux';
import { Section1Style } from '../style';
import SelectPartial from './SelectPartial';
import ColorPartial from './ColorPartial';
import { cartActions } from '../../../store/modules/cart/cartSlice';
import { authActions } from '../../../store/modules/common/authSlice';
import { orderActions } from '../../../store/modules/cart/orderSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Section1 = ({ setIsModal, setModalTitle }) => {
    const { currentData } = useSelector((state) => state.detail);
    const { isLogin } = useSelector((state) => state.auth);
    const { isbusy } = useSelector((state) => state.order);
    const { type, name, firstTitle, secondTitle, forPhone, caseData } = currentData;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addToOrderList = () => {
        if (isLogin === 'true' || isLogin === true) {
            const orderData = { ...currentData.caseData, cartId: 0 };
            const items = [];
            items.push(orderData);
            dispatch(orderActions.setOrderList(items));
        } else {
            dispatch(authActions.setLoginModalState(true));
        }
    };
    const addToCart = () => {
        if (isLogin === 'true' || isLogin === true) {
            dispatch(cartActions.addCartItem(currentData.caseData));
            setIsModal(true);
            setModalTitle('CART');
        } else {
            dispatch(authActions.setLoginModalState(true));
        }
    };

    const addToWishList = () => {
        if (isLogin === 'true' || isLogin === true) {
            dispatch(cartActions.addWishItem(currentData));
            setIsModal(true);
            setModalTitle('WISH LIST');
        } else {
            dispatch(authActions.setLoginModalState(true));
        }
    };

    useEffect(() => {
        if (isbusy) {
            navigate('/cart/step2');
            dispatch(orderActions.setBusyControl());
        }
    }, [isbusy]);
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

                        <ColorPartial />
                        <div className="buy" onClick={addToOrderList}>
                            BUY NOW
                        </div>
                        <div className="fn-btns">
                            <span onClick={addToCart}>ADD TO CART</span>
                            <span onClick={addToWishList}>WISH LIST</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
                <strong>Product Features</strong>
                <img src={`/images/detail/${type}/${type}.png`} alt="" />
            </div>
        </Section1Style>
    );
};

export default Section1;
