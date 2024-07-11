import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import { motion } from 'framer-motion';
import { shopData } from '../api/shopData';
import { Link, useParams } from 'react-router-dom';
import slugify from 'react-slugify';
import { IoHeartSharp } from 'react-icons/io5';
import 'react-medium-image-zoom/dist/styles.css';
import ReactImageMagnify from 'react-image-magnify';
import { useCart } from 'react-use-cart';
import { toast } from 'react-toastify';
import { CiCircleCheck } from "react-icons/ci";
import { IoMdCheckboxOutline } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { IoShareSocial } from "react-icons/io5";
import { PiArrowsLeftRightLight } from "react-icons/pi";
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Pagination,
    A11y,
    Autoplay,
} from "swiper/modules";
import SingleProduct from '../components/SingleProduct';
import { useSelector } from 'react-redux';

const ShopDetail = () => {
    const { slug } = useParams();
    const data = useSelector(p => p);
    const shopDetails = data.find(p => slugify(p.title) === slug);

    const breadcrumbItems = [
        { text: 'Home', link: '/' },
        { text: shopDetails.title, link: `/shop/${slug}` },
    ];

    const [quantity, setQuantity] = useState(1);

    const { addItem } = useCart();

    const handleAddToCart = (item) => {
        addItem(item, quantity);
        toast.success('Məhsul səbətə əlavə edildi.');
    };

    const increaseQuantity = () => {
        if (quantity < shopDetails.stock) {
            setQuantity(prevQuantity => prevQuantity + 1);
        }
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const relatedProducts = data.filter(item => item.category === shopDetails.category && item.id !== shopDetails.id);

    return (
        <div className='shop_detail'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="banner"
            >
                <div>
                    <BreadCrumb items={breadcrumbItems} />
                </div>
            </motion.div>

            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div className='img_card'>
                            <div className='imageMagnifyer'>
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        src: shopDetails.frontImg
                                    },
                                    largeImage: {
                                        src: shopDetails.frontImg,
                                        width: 1129,
                                        height: 750
                                    }
                                }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 detail_content">
                        <div className='head'>
                            <h4>{shopDetails.title}</h4>
                            <div className='d-flex justify-content-end wishlist'>
                                <Link to={'/wishlist'}><IoHeartSharp className='' /></Link>
                            </div>
                        </div>
                        <span className='price'>${shopDetails.price}</span>
                        <p className='pt-3'>{shopDetails.desc}</p>
                        <div className='stock_count'>
                            <CiCircleCheck className='icon' />
                            <span className='pt-3 ms-2'>{shopDetails.stock} in stock</span>
                        </div>
                        <div className='d-flex justify-content-between align-items-center mt-4'>
                            <div className='quantity_btn'>
                                <button onClick={decreaseQuantity}>-</button>
                                <span className='mx-3'>{quantity}</span>
                                <button onClick={increaseQuantity} disabled={quantity >= shopDetails.stock}>+</button>
                            </div>

                            <div className='add_cart'>
                                <button onClick={() => handleAddToCart(shopDetails)}>ADD TO CART</button>
                            </div>
                        </div>

                        <p className='pt-4 category'>Category: <span>{shopDetails.category}</span></p>

                        <div className='d-flex align-items-center gap-5 mt-5 questions_text'>
                            <div className='text_icons'>
                                <PiArrowsLeftRightLight className='icons' />
                                <span className='ms-2'>Compare</span>
                            </div>

                            <div className='text_icons'>
                                <CiCircleQuestion className='icons' />
                                <span className='ms-2'>Ask a Question</span>
                            </div>

                            <div className='text_icons'>
                                <IoShareSocial className='icons' />
                                <span className='ms-2'>Social Share</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='related_section mt-5'>
                <div className="container">
                    <h4>Related Products</h4>
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
                                relatedProducts.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <SingleProduct shopData={item} />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopDetail;
