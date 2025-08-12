import { useEffect, useRef, useState } from "react";
import { Section6Style } from "./style";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import ReactCardFlip from "react-card-flip";
import dataList from "../../../assets/section6Data";
const Section6 = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [flip, setFlip] = useState(dataList.map(() => false));

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy(); // 혹은 init 전에 깨끗이 초기화
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  const toggleFlip = (index) => {
    setFlip((prev) => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };
  return (
    <Section6Style>
      <div className="inner">
        <div className="top">
          <span>인플루언서 착용샷</span>
          <strong>스타일은 보여주는 것부터</strong>
          <div className="nav-area">
            <i ref={prevRef}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M32.5 38.75L23.75 30L32.5 21.25"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30 5C16.1925 5 5 16.1925 5 30C5 43.8075 16.1925 55 30 55C43.8075 55 55 43.8075 55 30C55 16.1925 43.8075 5 30 5Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </i>
            <i ref={nextRef}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M27.5 21.25L36.25 30L27.5 38.75"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30 55C43.8075 55 55 43.8075 55 30C55 16.1925 43.8075 5 30 5C16.1925 5 5 16.1925 5 30C5 43.8075 16.1925 55 30 55Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </i>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={80}
          slidesPerGroup={4}
          onSwiper={setSwiperInstance}
          loop={true}
        >
          {dataList.map((item, idx) => (
            <SwiperSlide style={{ background: "#999" }}>
              <ReactCardFlip isFlipped={flip[idx]} flipDirection="vertical">
                <div
                  className="card"
                  onClick={() => toggleFlip(idx)}
                  style={{ cursor: "pointer" }}
                >
                  <img src={item.modelImg} alt="" />
                  <span>{item.name}</span>
                </div>
                <div
                  className="card card-case"
                  onClick={() => toggleFlip(idx)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="bg"></div>
                  <img src={item.caseImg} alt="" />
                  <span>{item.title}</span>
                </div>
              </ReactCardFlip>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="text">
        <strong>No right answer.</strong>
        <strong>Just your own way.</strong>
      </div>
    </Section6Style>
  );
};

export default Section6;
