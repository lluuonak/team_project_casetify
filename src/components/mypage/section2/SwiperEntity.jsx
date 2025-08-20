import { SwiperSlide } from 'swiper/react';

const SwiperEntity = ({ data }) => {
    const { title, items } = data;

    return (
        <>
            <div className="inner">
                <strong>{title}</strong>
                <ul>
                    {items.map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
                <span className="more">전체보기</span>
            </div>
        </>
    );
};

export default SwiperEntity;
