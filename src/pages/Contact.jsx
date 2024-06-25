import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaPinterest, FaTiktok } from "react-icons/fa";

const Contact = () => {

    const breadcrumbItems = [
        { text: 'Home', link: '/' },
        { text: 'Contact', link: '/contact' },
    ];
    return (
        <div className='contact'>
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
                    >Contact</motion.h1>
                    <BreadCrumb items={breadcrumbItems} />
                </div>
            </motion.div>

            <div className="container pt-5">
                <motion.div
                    initial={{ opacity: 0, y: '-10%' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '-10%' }}
                    transition={{ duration: 1.2 }}
                    className='maps'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.133567875787!2d49.73301362782861!3d40.47230999754202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40308588ae2d0b45%3A0xc38894833ee3d8e2!2sKorpu%20Bina%20Tikinti!5e0!3m2!1saz!2saz!4v1715717563274!5m2!1saz!2saz" width="100%" height="600px" loading="lazy" ></iframe>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, y: '-10%' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '-10%' }}
                    transition={{ duration: 1.2 }}
                    className="row py-5">
                    <div className="pb-4">
                        <h4>GET IN TOUCH</h4>
                        <p>Please enter the details of your request. A member of our support staff will respond as soon as possible.</p>
                    </div>
                    <div className="col-lg-7">
                        <form>
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-6">
                                    <div>
                                        <input type="text" placeholder='YOUR NAME' />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-6">
                                    <div>
                                        <input type="email" placeholder='YOUR EMAIL' />
                                    </div>
                                </div>
                                <div className="col-lg-12 pt-3">
                                    <input type="text" placeholder='SUBJECT' />
                                </div>

                                <div className="col-lg-12 pt-3">
                                    <textarea name="" id="" rows="10" placeholder='YOUR MESSAGE'></textarea>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="col-lg-5 contact-info">
                        <div>
                            <p><span>Address:</span> 123 Suspendis matti, Visaosang Building VST District, NY Accums, North American</p>

                            <p className='pt-3'><span>Email:</span> support@domain.com</p>

                            <p className='pt-3'><span>Call Us:</span> (012)-345-67890</p>

                            <p className='pt-3'><span>Opening time:</span> Our store has re-opened for shopping, exchanges every day <span>11am to 7pm</span></p>

                            <div className='icons pt-4'>
                                <div className='icon'>
                                    <FaFacebookF />
                                </div>

                                <div className='icon'>
                                    <FaTwitter />
                                </div>

                                <div className='icon'>
                                    <FaPinterest />
                                </div>

                                <div className='icon'>
                                    <FaTiktok />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default Contact