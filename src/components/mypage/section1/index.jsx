import React from 'react';
import { Link } from 'react-router-dom';
import { Section1Style } from './style';
import OrderStatus from './order/OrderStatus';
import OrderList from './order/OrderList';
import WishList from './wish/WishList';
import { useDispatch } from 'react-redux';
import { authActions } from '../../../store/modules/common/authSlice';

const Section1 = () => {
    const dispatch = useDispatch();

    return (
        <Section1Style>
            <div className="inner">
                <div className="mypage-gnb">
                    <div className="left">
                        <div className="profile-img"></div>
                        <div className="user-info">
                            <strong>닉네임</strong>
                            <span>님</span>
                        </div>
                    </div>
                    <div className="right">
                        <Link className="edit">회원 정보 수정</Link>
                        <Link
                            className="logout"
                            onClick={() => {
                                dispatch(authActions.setLogOut());
                            }}
                        >
                            로그아웃
                        </Link>
                    </div>
                </div>
                {/* 주문현황 영역 */}
                <OrderStatus />
                {/* 주문내역 영역 */}
                <OrderList />
                {/* 찜목록 영역 */}
                <WishList />
            </div>
        </Section1Style>
    );
};

export default Section1;
