import React from 'react';
import brand1 from '../../../../assets/images/brand1.webp';
import brand2 from '../../../../assets/images/brand2.webp';
import brand3 from '../../../../assets/images/brand3.webp';
import brand4 from '../../../../assets/images/brand4.webp';
import brand5 from '../../../../assets/images/brand5.webp';
import brand6 from '../../../../assets/images/brand6.webp';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Pagination,
    A11y,
    Autoplay,
} from "swiper/modules";

import 'swiper/css';

const Brand = () => {
    return (
        <div className='brands'>
            <div className="container">
                <div className="row">
                    <Swiper
                        grabCursor={true}
                        slidesPerView={6}
                        spaceBetween={10}
                        modules={[Autoplay]}
                        autoplay={{ delay: 1000 }}
                        speed={2000}
                        loop={true}
                        breakpoints={{
                            0: {
                                spaceBetween: 10,
                                slidesPerView: 2,

                            },
                            480: {
                                spaceBetween: 10,
                                slidesPerView: 2,
                            },
                            768: {
                                spaceBetween: 15,
                                slidesPerView: 4,
                            },

                            912: {
                                spaceBetween: 15,
                                slidesPerView: 4,
                            },
                            1280: {
                                spaceBetween: 70,
                                slidesPerView: 6,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className='text-center'>
                                <img src={brand1} alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='text-center'>
                                <img src={brand2} alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='text-center'>
                                <img src={brand3} alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='text-center'>
                                <img src={brand4} alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='text-center'>
                                <img src={brand5} alt="" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='text-center'>
                                <img src={brand6} alt="" />
                            </div>
                        </SwiperSlide>

                       

                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Brand