import React from 'react';
import { Section2Style } from './style';
import { useDispatch, useSelector } from 'react-redux';
import { customActions } from '../../../store/modules/customSlice';
import Custom from '../../custom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const section2 = () => {
    const dispatch = useDispatch();
    const { customState } = useSelector((state) => state.custom);
    const customClick = () => {
        dispatch(customActions.setCustomState(true));
    };
    return (
        <Section2Style>
            {/* 상단 텍스트 영역 */}
            <div className="text-box">
                기기는 같아도 <br />
                <span>스타일</span>은 달라야 하니까.
            </div>
            {/* 이미지 영역 */}
            <div className="img-box">
                <ul>
                    <li>
                        <img src="../../public/images/product/product-menu1.png" alt="" />
                        <p>Apple</p>
                    </li>
                    <li>
                        <img src="../../public/images/product/product-menu2.png" alt="" />
                        <p>Samsung</p>
                    </li>
                    <li onClick={customClick}>
                        <img src="../../public/images/product/product-menu3.png" alt="" />
                        <p>Custom</p>
                    </li>
                    <li>
                        <Link to="/acc">
                            <img src="../../public/images/product/product-menu4.png" alt="" />
                            <p>ACC</p>
                        </Link>
                    </li>
                </ul>
            </div>
            {customState && (
                <>
                    {/* 배경 오버레이 - 클릭시 모달 닫힘 */}
                    <div
                        className="overlay"
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            zIndex: 1000,
                        }}
                    />
                    <Custom />
                </>
            )}
            <div className="bottom-text">
                <p>Product</p>
            </div>
        </Section2Style>
    );
};

export default section2;
