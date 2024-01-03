import React from 'react';
import './scss/section1.scss'
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-flip';

import { Autoplay, Pagination, Navigation, EffectFade, EffectFlip } from 'swiper/modules';

export default function Section1ComponentChild({ slide,n }) {
    
    const SlideMain = React.useRef();


    return (
        <div className="slide-box">
            <Swiper ref={SlideMain}
                cssMode={true} // 이거 없애면 마우스 스와이프 가능, 대신 이동 텀이 사라짐
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,  
                }}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade, EffectFlip]}
                
                className="mySwiper"
            >
                {
                    slide.map((item, idx)=>{
                        return (
                            <SwiperSlide key={idx}>
                                <img src={`./images/intro/section1/${item.이미지}`} alt="" />
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    );
};
