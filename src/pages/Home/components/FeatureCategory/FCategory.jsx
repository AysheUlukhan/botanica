import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Pagination,
    A11y,
    Autoplay,
} from "swiper/modules";

import 'swiper/css';
import img1 from '../../../../assets/images/category1.jpg'
import img2 from '../../../../assets/images/category2.webp'
import img3 from '../../../../assets/images/category3.webp'


const FCategory = () => {
    return (
        <div className='feature-category'>
            <div className="container">
                <div className="row">
                    <div className='fc-head'>
                        <h6>Product Benefits</h6>
                        <h5>Featured Categories</h5>
                    </div>
                    <div className='pt-5'>
                        <Swiper
                            grabCursor={true}
                            slidesPerView={3}
                            spaceBetween={10}
                            modules={[Autoplay]}
                            autoplay={{ delay: 1000 }}
                            speed={2000}
                            loop={true}
                            breakpoints={{
                                0: {
                                    spaceBetween: 10,
                                    slidesPerView: 1,

                                },
                                480: {
                                    spaceBetween: 10,
                                    slidesPerView: 1,
                                },
                                768: {
                                    spaceBetween: 15,
                                    slidesPerView: 2,
                                },

                                912: {
                                    spaceBetween: 15,
                                    slidesPerView: 2,
                                },
                                1280: {
                                    spaceBetween: 70,
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="cards">
                                    <div className='card-head'>
                                        <img src={img1} alt="" />
                                    </div>

                                    <div className='cards-content text-center pt-4'>
                                        <h5 className='pb-3'>Sunflower Honey</h5>
                                        <p>Sunflower Honey delivers the delight of the world’s happiest flowers with every spoonful. We proudly source this golden treasure from the beekeepers of Ukraine and Romania, the world’s top producers of sunflower honey.   </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                            <div className="cards">
                                    <div className='card-head'>
                                        <img src={img2} alt="" />
                                    </div>

                                    <div className='cards-content text-center pt-4'>
                                        <h5 className='pb-3'>Sunflower Honey</h5>
                                        <p>Sunflower Honey delivers the delight of the world’s happiest flowers with every spoonful. We proudly source this golden treasure from the beekeepers of Ukraine and Romania, the world’s top producers of sunflower honey.   </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cards">
                                    <div className='card-head'>
                                        <img src={img3} alt="" />
                                    </div>

                                    <div className='cards-content text-center pt-4'>
                                        <h5 className='pb-3'>Sunflower Honey</h5>
                                        <p>Sunflower Honey delivers the delight of the world’s happiest flowers with every spoonful. We proudly source this golden treasure from the beekeepers of Ukraine and Romania, the world’s top producers of sunflower honey.   </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            {/* <SwiperSlide>
                                <div className="cards">
                                    <div className='card-head'>
                                        <img src={img3} alt="" />
                                    </div>

                                    <div className='cards-content text-center pt-4'>
                                        <h5 className='pb-3'>Sunflower Honey</h5>
                                        <p>Sunflower Honey delivers the delight of the world’s happiest flowers with every spoonful. We proudly source this golden treasure from the beekeepers of Ukraine and Romania, the world’s top producers of sunflower honey.   </p>
                                    </div>
                                </div>
                            </SwiperSlide> */}
                           
                        </Swiper>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FCategory