import React from 'react';
import img1 from '../../../../assets/images/gallerry1.webp';
import img2 from '../../../../assets/images/gallerry2.webp';
import img3 from '../../../../assets/images/gallerry3.webp';
import img4 from '../../../../assets/images/gallerry4.webp';
import img5 from '../../../../assets/images/gallerry5.webp';
import img6 from '../../../../assets/images/gallerry6.webp';
import { FaInstagram } from "react-icons/fa6";


const BSocial = () => {
    return (
        <div className='be-social'>
            <div className="container">
                <div className="row row-gap-3 pb-3">

                <div className="col-lg-6 col-md-6 d-block d-xl-none d-xxl-none d-lg-none d-md-none">
                        <div className='social-content'>
                            <h5>Let's Bee Social</h5>
                            <p>Follow us: @botanica</p>
                            <p>Share your style: #botanica</p>
                            <p>Share your pup’s style: #botanica</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                        <div className="wrapper">
                            <img src={img1} alt="" />
                            <div className='caption'>
                                <FaInstagram />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 d-none d-xl-block d-xxl-block d-lg-block d-md-block">
                        <div className='social-content'>
                            <h5>Let's Bee Social</h5>
                            <p>Follow us: @botanica</p>
                            <p>Share your style: #botanica</p>
                            <p>Share your pup’s style: #botanica</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                        <div className="wrapper">
                            <img src={img2} alt="" />
                            <div className='caption'>
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row row-gap-3">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                        <div className="wrapper">
                            <img src={img3} alt="" />
                            <div className='caption'>
                                <FaInstagram />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                        <div className="wrapper">
                            <img src={img4} alt="" />
                            <div className='caption'>
                                <FaInstagram />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                        <div className="wrapper">
                            <img src={img5} alt="" />
                            <div className='caption'>
                                <FaInstagram />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                        <div className="wrapper">
                            <img src={img6} alt="" />
                            <div className='caption'>
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BSocial