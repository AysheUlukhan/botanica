import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import aboutimg from '../assets/images/About-Us.webp'
import imgquote from '../assets/images/about-quote.webp'
import quote from '../assets/images/icon_quote.webp'
import gif_shopping from '../assets/images/swipe-for-shopping.gif'
import gif_card from '../assets/images/shopping-cart-loader.gif'
import { motion } from 'framer-motion';
const About = () => {
    const breadcrumbItems = [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about' },
    ];
    return (
        <div className='about'>
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
                    >About</motion.h1>
                    <BreadCrumb items={breadcrumbItems} />
                </div>
            </motion.div>

            <div className='container'>
                <div className='pt-5'>
                    <motion.div
                        initial={{ opacity: 0, y: '-10%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-10%' }}
                        transition={{ duration: 1.2 }}
                    >
                        <img className="d-block mx-lg-auto img-fluid about-img" src={aboutimg} alt="" />
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: '-10%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-10%' }}
                        transition={{ duration: 1.2 }}
                        className='pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat ut ex vel finibus. Nunc eget molestie purus. Fusce imperdiet pulvinar est, eget fermentum nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae</motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: '-10%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-10%' }}
                        transition={{ duration: 1.2 }}
                        className='pt-3'>Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique, erat nulla rutrum risus, a imperdiet nulla lorem fermentum erat. Pellentesque elementum justo at velit fringilla, eu feugiat erat fermentum. Vivamus libero dolor, porta eget vehicula eu, iaculis id lacus. Sed interdum convallis sapien, eget faucibus sapien. Proin hendrerit lacus turpis.</motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: '-10%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-10%' }}
                        transition={{ duration: 1.2 }}
                        className='pt-3'>Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris.</motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: '-10%' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '-10%' }}
                    transition={{ duration: 1.2 }}
                    className='about-quote d-block mx-lg-auto img-fluid d-flex justify-content-center align-items-center gap-4'>
                    <div>
                        <img src={imgquote} alt="" />
                    </div>

                    <div className='d-flex gap-3'>
                        <div>
                            <img src={quote} alt="" className='d-block mx-lg-auto img-fluid' />
                        </div>
                        <div>
                            <p className='pb-3'>Best purchase I’ve made this winter! The color and knitting are exquisite and it's so comfy! Went from NYC to Miami without ever taking it off. Super cute!!</p>
                            <span >SonTungMP3 - CEO RisingBamboo</span>
                        </div>
                    </div>
                </motion.div>

                <div className='row align-items-center pt-5'>
                    <motion.div
                        initial={{ opacity: 0, y: '-10%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-10%' }}
                        transition={{ duration: 1.2 }}
                        className="col-lg-6">
                        <h5>Why choose us ?</h5>
                        
                        <p>Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: '-10%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-10%' }}
                        transition={{ duration: 1.2 }}
                        className="col-lg-6">
                        <img src={gif_shopping} className='d-block mx-lg-auto img-fluid' alt="" />
                    </motion.div>
                </div>

                <hr />

                <div className='row align-items-center py-5'>
                    <motion.div
                        initial={{ opacity: 0, y: '-10%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-10%' }}
                        transition={{ duration: 1.2 }}
                        className="col-lg-6">
                        <img src={gif_card} className='d-block mx-lg-auto img-fluid' alt="" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: '-10%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-10%' }}
                        transition={{ duration: 1.2 }}
                        className="col-lg-6">
                        <h5>Trusted online shopping</h5>
                        <p>Maecenas congue metus id turpis iaculis mattis. Sed pellentesque id arcu id scelerisque. Ut ullamcorper rutrum justo, at blandit eros maximus ut. Integer non tincidunt justo, rhoncus Aenean venenatis sed purus ac sollicitudin. Nulla mauris risus, commodo et luctus rutrum, lobortis sed mauris. Integer congue, sem elementum varius tristique.</p>
                    </motion.div>


                </div>
            </div>
        </div>
    )
}

export default About