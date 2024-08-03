import React from 'react';
import img from '../../../../assets/images/benefithoney1.webp';
import img_bee from '../../../../assets/images/icon-bee.png'
import img_title from '../../../../assets/images/icon-title.webp'
import { useTranslation } from 'react-i18next';
const PBenefit = () => {
    const { t } = useTranslation();
    return (
        <div className='product_benefit py-5'>
            <div>
                <img className='bee_icon' src={img_bee} alt="" />
            </div>
            <div className="container">
                <div className='pb_head text-center'>
                    <img src={img_title} alt="" />
                    <h6>{t("pbenefit.0")}</h6>
                    <h5 className='pt-3'>{t("pbenefit.1")}</h5>
                    <p className='pt-3'>{t("pbenefit.2")}</p>
                </div>

                <div className="row pt-5">
                    <div className="col-lg-4 ">
                        <div className='benefit-card'>
                            <div className='d-flex gap-5'>
                                <p className='mb-0'>{t("pbenefit.3")}</p>
                                <div className='hexagon' >
                                    <div className='count-wrapper'>
                                        <span>01</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='benefit-card'>
                            <div className='d-flex gap-5'>
                                <p className='mb-0'>{t("pbenefit.4")}</p>
                                <div className='hexagon' >
                                    <div className='count-wrapper'>
                                        <span>02</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='benefit-card'>
                            <div className='d-flex gap-5'>
                                <p className='mb-0'>{t("pbenefit.5")}</p>
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
                                <p className='mb-0'>{t("pbenefit.3")}</p>
                                <div className='hexagon' >
                                    <div className='count-wrapper'>
                                        <span>01</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='benefit-card'>
                            <div className='d-flex gap-5'>
                                <p className='mb-0'>{t("pbenefit.4")}</p>
                                <div className='hexagon' >
                                    <div className='count-wrapper'>
                                        <span>02</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='benefit-card'>
                            <div className='d-flex gap-5'>
                                <p className='mb-0'>{t("pbenefit.5")}</p>
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