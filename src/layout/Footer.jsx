import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import imgfooter from '../assets/images/logo-footer.png';
import { FaFacebookF, FaTwitter, FaPinterest, FaTiktok } from "react-icons/fa";
import img1 from '../assets/images/icon-footer.webp'
import img2 from '../assets/images/icon-footer2.png'

const Footer = () => {
  const location = useLocation();
  if (location.pathname !== "/404" &&
    location.pathname !== "/login" &&
    location.pathname !== "/register" &&
    location.pathname !== "/reset_password" &&
    location.pathname !== "/dashboard" &&
    location.pathname !== "/dashboard/users" &&
    location.pathname !== "/dashboard/add"

  ) {

    return (
      <footer>
        <div className='footer-subs'>
          <div className="container">
            <img className='footer_img' src={img1} alt="" />
            <img className='footer_img2' src={img2} alt="" />
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <div className='text-center'>
                <h5>Subscribe</h5>
                <p>Sign up for newsletter to receive special offers and exclusive news about Botanica products</p>
              </div>
              <div className='subs-input mt-4'>
                <input type="text" placeholder='ENTER YOUR EMAIL' />
                <button>SUBSCRIBE</button>
              </div>

            </div>
            <div className="row row-gap-5 pt-5 ">
              <div className="col-lg-3">
                <div className='links'>
                  <h6>Orders And Returns</h6>
                  <div className='pt-3 '>
                    <div className='link'>
                      <Link to='/faq'>Faq</Link>
                    </div>

                    <div className='link'>
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
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-lg-6 footer-medium'>
                <div>
                  <img src={imgfooter} alt="" />
                </div>
                <div className=' pt-4'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed dui tempor eros porttitor tristique eget eu lectus. Sed auctor mi vitae velit aliquet, quis pharetra sem vestibulum. Nam vel lectus imperdiet.</p>
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
                  <h6>My Account</h6>
                  <div className='pt-3 '>
                    <div className='link'>
                      <Link>Login</Link>
                    </div>

                    <div className='link'>
                      <Link>Register Account</Link>
                    </div>

                    <div className='link'>
                      <Link>My Wishlist</Link>
                    </div>

                    <div className='link'>
                      <Link>My Compare</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  } else {
    return null;
  }
}

export default Footer