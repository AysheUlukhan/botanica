import React from 'react';
import img from '../../../../assets/images/benefithoney1.webp';
import img_bee from '../../../../assets/images/icon-bee.png'
import img_title from '../../../../assets/images/icon-title.webp'
const PBenefit = () => {
    return (
        <div className='product_benefit py-5'>
            <div>
                <img className='bee_icon' src={img_bee} alt="" />
            </div>
            <div className="container">
                <div className='pb_head text-center'>
                    <img src={img_title} alt="" />
                    <h6>Product Benefits</h6>
                    <h5 className='pt-3'>Speciality of Honey</h5>
                    <p className='pt-3'>Honey contains mostly sugar, as well as a mix of amino acids, vitamins, minerals, iron, zinc and antioxidants. In addition to its use as a natural sweetener, honey is used as an anti-inflammatory, antioxidant and antibacterial agent.</p>
                </div>

                <div className="row pt-5">
                    <div className="col-lg-4 ">
                        <div className='benefit-card'>
                            <div className='d-flex gap-5'>
                                <p className='mb-0'>Honey is safer than Sugar</p>
                                <div className='hexagon' >
                                    <div className='count-wrapper'>
                                        <span>01</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='benefit-card'>
                            <div className='d-flex gap-5'>
                                <p className='mb-0'>Honey Combats Skin andScalp Infections</p>
                                <div className='hexagon' >
                                    <div className='count-wrapper'>
                                        <span>02</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='benefit-card'>
                            <div className='d-flex gap-5'>
                                <p className='mb-0'>Honey helps ChildrenSleep Soundly</p>
                                <div className='hexagon' >
                                    <div className='count-wrapper'>
                                        <span>03</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 benefit-img d-flex justify-content-center align-items-center">
                        <img src={img} alt="" />
                    </div>

                    <div className="col-lg-4 ">
                        <div className='benefit-card'>
                            <div className='d-flex gap-5'>
                                <p className='mb-0'>Honey is safer than Sugar</p>
                                <div className='hexagon' >
                                    <div className='count-wrapper'>
                                        <span>01</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='benefit-card'>
                            <div className='d-flex gap-5'>
                                <p className='mb-0'>Honey Combats Skin andScalp Infections</p>
                                <div className='hexagon' >
                                    <div className='count-wrapper'>
                                        <span>02</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='benefit-card'>
                            <div className='d-flex gap-5'>
                                <p className='mb-0'>Honey helps ChildrenSleep Soundly</p>
                                <div className='hexagon' >
                                    <div className='count-wrapper'>
                                        <span>03</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PBenefit