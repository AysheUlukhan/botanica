import React, { useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import imgfooter from '../assets/images/logo-footer.png';
import { FaFacebookF, FaTwitter, FaPinterest, FaTiktok } from "react-icons/fa";
import img1 from '../assets/images/icon-footer.webp'
import img2 from '../assets/images/icon-footer2.png'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const { pathname } = location;
  const isExcludedPath = useCallback(() => {
    const excludedPaths = [
      "/404",
      "/login",
      "/register",
      "/reset_password",
      "/dashboard",
      "/dashboard/users",
      "/dashboard/add"
    ];

    if (excludedPaths.includes(pathname)) {
      return true;
    }

    const dynamicPaths = [
      /^\/dashboard\/edit\/[^/]+$/
    ];

    return dynamicPaths.some((pattern) => pattern.test(pathname));
  }, [pathname]);

  if (isExcludedPath()) {
    return null;
}



  return (
    <footer>
      <div className='footer-subs'>
        <div className="container">
          <img className='footer_img' src={img1} alt="" />
          <img className='footer_img2' src={img2} alt="" />
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <div className='text-center'>
              <h5>{t("footer.0")}</h5>
              <p>{t("footer.1")}</p>
            </div>
            <div className='subs-input mt-4'>
              <input type="text" placeholder='ENTER YOUR EMAIL' />
              <button>{t("footer.3")}</button>
            </div>

          </div>
          <div className="row row-gap-5 pt-5 ">
            <div className="col-lg-3">
              <div className='links'>
                <h6>{t("footer.4")}</h6>
                <div className='pt-3 '>
                  <div className='link'>
                    <Link to='/faq'>Faq</Link>
                  </div>

                  {/* <div className='link'>
                    <Link>Help and advice</Link>
                  </div>

                  <div className='link'>
                    <Link>Shipping & Returns</Link>
                  </div>

                  <div className='link'>
                    <Link>Terms and conditions</Link>
                  </div>

                  <div className='link'>
                    <Link>Refund Policy</Link>
                  </div> */}
                </div>
              </div>
            </div>

            <div className='col-lg-6 footer-medium'>
              <div>
                <img src={imgfooter} alt="" />
              </div>
              <div className=' pt-4'>
                <p>{t("footer.5")}</p>
              </div>
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

            <div className="col-lg-3">
              <div className='links'>
                <h6>{t("footer.6")}</h6>
                <div className='pt-3 '>
                  {/* <div className='link'>
                    <Link>Login</Link>
                  </div>

                  <div className='link'>
                    <Link>Register Account</Link>
                  </div> */}

                  <div className='link'>
                    <Link to='/wishlist'>{t("footer.7")}</Link>
                  </div>

                  <div className='link'>
                    <Link to='/basket'>{t("footer.8")}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )

}

export default Footer