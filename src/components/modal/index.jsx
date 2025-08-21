import React from 'react';
import { ModalOverlay, ModalStyle } from './style';
import { Link } from 'react-router-dom';

const Modal = ({ title, setIsModal }) => {
    let kor = '';
    let link = '';
    switch (title) {
        case 'CART':
            kor = '장바구니';
            link = '/cart';
            break;
        case 'WISH LIST':
            kor = '위시리스트';
            link = '/mypage';
            break;
    }

    const closeModal = () => {
        setIsModal(false);
    };
    return (
        <ModalOverlay>
            <ModalStyle>
                <div className="inner">
                    <strong>{title}</strong>
                    <span>{kor}에 상품이 정상적으로 담겼습니다</span>
                    <Link to={link}>{kor} 이동</Link>
                </div>
                <i className="close" onClick={closeModal}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path
                            d="M10 10L5 5M10 10L15 15M10 10L15 5M10 10L5 15"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </i>
            </ModalStyle>
        </ModalOverlay>
    );
};

export default Modal;
