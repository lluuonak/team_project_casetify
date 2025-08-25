import React, { useState } from 'react';
import { ItemStyle, OtherOrderItemsStyle } from './style';
import OtherOrderItems from './OtherOrderItems';

const OrderItem = ({ data, orderNo }) => {
    const [isOpen, setIsOpen] = useState(false);
    const mainItem = data[0];

    const otherItems = data.slice(1);
    const totalPrice = data.reduce((sum, item) => sum + Number(item.price), 0);

    return (
        <>
            <ItemStyle>
                <div className="title">
                    <span>주문번호</span>
                    <span className="order-no">{orderNo}</span>
                </div>
                <div className="info">
                    <div className="inner">
                        <div className="img">
                            <img src={`/images/detail/phone/${mainItem.folder}/1.webp`} alt="" />
                        </div>
                        <div className="name-price">
                            {data.length > 1 && (
                                <span className="name">
                                    {mainItem.name} 외 {otherItems.length} 종
                                </span>
                            )}
                            {data.length == 1 && <span className="name">{mainItem.name}</span>}
                            <span className="price">{totalPrice.toLocaleString()} 원</span>
                        </div>
                        <i
                            className={`toggle-icon ${isOpen ? 'open' : ''}`}
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M21.1844 26.178C20.8719 26.4905 20.448 26.666 20.0061 26.666C19.5642 26.666 19.1403 26.4905 18.8278 26.178L9.39944 16.7497C9.24025 16.596 9.11328 16.4121 9.02594 16.2087C8.93859 16.0054 8.89261 15.7867 8.89069 15.5654C8.88876 15.3441 8.93093 15.1246 9.01474 14.9198C9.09854 14.715 9.22229 14.5289 9.37878 14.3724C9.53527 14.2159 9.72135 14.0921 9.92618 14.0083C10.131 13.9245 10.3505 13.8824 10.5718 13.8843C10.7931 13.8862 11.0118 13.9322 11.2151 14.0195C11.4185 14.1069 11.6024 14.2339 11.7561 14.393L20.0061 22.643L28.2561 14.393C28.5704 14.0894 28.9914 13.9214 29.4284 13.9252C29.8654 13.929 30.2835 14.1043 30.5925 14.4133C30.9015 14.7224 31.0768 15.1404 31.0806 15.5774C31.0844 16.0144 30.9164 16.4354 30.6128 16.7497L21.1844 26.178Z"
                                    fill="white"
                                />
                            </svg>
                        </i>
                    </div>
                </div>
                {isOpen && <OtherOrderItems data={otherItems} />}
            </ItemStyle>
        </>
    );
};

export default OrderItem;
