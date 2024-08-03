import React from 'react';
import icon1 from '../../../../assets/images/icon-choose1.webp'
import icon2 from '../../../../assets/images/icon-choose2.png'
import icon3 from '../../../../assets/images/icon-choose3.webp'
import { motion } from 'framer-motion';
import img_title from '../../../../assets/images/icon-title.webp'
import { useTranslation } from 'react-i18next';
const WChoose = () => {
    const { t } = useTranslation();
    return (
        <div className='home_choose pt-5'>
            <div className="container">
                <div className='text-center choose_head'>
                    <img src={img_title} alt="" />
                    <p>{t("whoose.0")}</p>
                    <h5>{t("whoose.1")}</h5>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: '-10%' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '-10%' }}
                    transition={{ duration: 1.2 }}
                    className="row row-gap-5 pt-5">
                    <div className="col-lg-4">
                        <div className='choose_card'>
                            <div className="content_widget">
                                <div className='content-top'>
                                    <div className="image_box_top">
                                        <figure>
                                            <img src={icon1} alt="" />
                                        </figure>
                                        <h3>{t("whoose.2")}</h3>
                                    </div>
                                </div>
                                <div className='content-decs'>
                                    <p>{t("whoose.3")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className='choose_card'>
                            <div className="content_widget">
                                <div className='content-top'>
                                    <div className="image_box_top">
                                        <figure>
                                            <img src={icon2} alt="" />
                                        </figure>
                                        <h3>{t("whoose.2")}</h3>
                                    </div>
                                </div>
                                <div className='content-decs'>
                                    <p>{t("whoose.3")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className='choose_card'>
                            <div className="content_widget">
                                <div className='content-top'>
                                    <div className="image_box_top">
                                        <figure>
                                            <img src={icon3} alt="" />
                                        </figure>
                                        <h3>{t("whoose.2")}</h3>
                                    </div>
                                </div>
                                <div className='content-decs'>
                                    <p>{t("whoose.3")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default WChoose