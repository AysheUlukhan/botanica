import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { IoMdCheckmark } from "react-icons/io";
import { useSelector } from 'react-redux';
import SingleProduct from '../components/SingleProduct';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Pagination,
    A11y,
    Autoplay,
} from "swiper/modules";

import 'swiper/css';

const Thankyou = () => {
    const breadcrumbItems = [
        { text: 'Home', link: '/' },
        { text: 'Thankyou', link: '/thankyou' },
    ];
    const data = useSelector(p => p);
    const randomNumber = Math.floor(Math.random() * 5);
    return (
        <div className='thankyou'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="banner" >
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: '-10%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-10%' }}
                        transition={{ duration: 1.2 }}
                    >Thank you</motion.h1>
                    <BreadCrumb items={breadcrumbItems} />
                </div>
            </motion.div>

            <div className='container my-5'>
                <div className='text-center '>
                    <IoMdCheckmark className='check-icon mb-4' />
                    <h5>Thank you. Your order has been received.</h5>
                    <h5>Keep shopping.</h5>
                </div>

                <div className="row">
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
                        {
                            data.slice(randomNumber, randomNumber+5).map((item) => (
                                <SwiperSlide>
                                    <SingleProduct shopData={item} key={item.id} />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Thankyou