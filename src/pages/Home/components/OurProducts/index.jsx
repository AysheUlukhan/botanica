  import React from 'react';
  import SingleProduct from '../../../../components/SingleProduct';
  import { Link } from 'react-router-dom';
  import { Swiper, SwiperSlide } from 'swiper/react';
  import {
    Pagination,
    A11y,
    Autoplay,
  } from "swiper/modules";

  import 'swiper/css';
  import {shopData} from '../../../../api/shopData'
import { useSelector } from 'react-redux';
import img_title from '../../../../assets/images/icon-title.webp'
import { useTranslation } from 'react-i18next';
  const OurProduct = () => {
    const data = useSelector(p=>p)
    const { t } = useTranslation();
    return (
      <div className='our_product mt-5'>
        <div className='container pt-5'>
          <div className="row">
            <div className='text-center'>
            <img src={img_title} alt="" />
              <h3>{t("ourproduct.0")}</h3>
            </div>
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
                data.map((item) => (
                  <SwiperSlide>
                    <SingleProduct shopData={item} key={item.id} />
                  </SwiperSlide>
                ))
              }

            </Swiper>
          </div>

          <div className='d-flex justify-content-center py-5'>
            <Link className='btn-all'>{t("ourproduct.1")}</Link>
          </div>
        </div>
      </div>
    )
  }

  export default OurProduct



