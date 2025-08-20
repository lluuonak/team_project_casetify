import { BottomStyle } from './style';
import datalist from '../../../assets/mypage/inquiryData';
import { Swiper, SwiperSlide } from 'swiper/react'; // Swiper 컴포넌트
import 'swiper/css';
import SwiperEntity from './SwiperEntity';
const BottomSection = () => {
    return (
        <BottomStyle>
            <Swiper
                spaceBetween={30} // 슬라이드 사이의 간격 (px)
                slidesPerView="auto"
            >
                {datalist.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <SwiperEntity data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </BottomStyle>
    );
};

export default BottomSection;
