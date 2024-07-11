import React, { useContext } from 'react';
import hero_slider1 from '../../assets/images/hero_slider1.webp';
import { Link } from 'react-router-dom';
import WChoose from './components/WhyChoose/WChoose';
import ACertification from './components/AuthCertification/ACertification';
import OurProduct from './components/OurProducts';
import bee from '../../assets/images/bee.webp';
import bee2 from '../../assets/images/bee2.webp';
import hero_dark_img from '../../assets/images/hero_dark_img.png'
import dark_honey2 from '../../assets/images/dark_honey2.png'
import dark_honey3 from '../../assets/images/dark_honey3.webp'
// // motion
import { motion } from 'framer-motion';
import PBenefit from './components/ProductBenefit';
import FCategory from './components/FeatureCategory/FCategory';
import LNews from './components/LatestNews';
import BSocial from './components/BeSocial';
import Brand from './components/Brand';
import { ModeContext } from '../../context/ModeContext';
import { TypeAnimation } from 'react-type-animation';
import Typewriter from 'typewriter-effect';
const Home = () => {
  const [mode] = useContext(ModeContext);

  return (
    <>
      <div className='home'>
        <div className="hero slider">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="container">

            <div className="row">
              <motion.div
                initial={{ opacity: 0, y: '-10%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: '-10%' }}
                transition={{ duration: 1.2 }}
                className='col-lg-4 col-md-4 col-sm-12 hero_content'>
                {/* <TypeAnimation
                  sequence={[
                    "Fresh Organic"
                  ]}
                  speed={50}
                  repeat={Infinity}
                /> */}




                <h5 className="mb-3">
                  <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      strings: "Fresh Organic"
                    }}
                  />
                </h5>
                <h3>Mint Blossom <br /> Honey</h3>
                <div className="pt-5">
                  <Link to='shop'>SHOP NOW</Link>
                </div>
              </motion.div>

              
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 1.2 }}
                  className="col-lg-8 col-md-8 col-sm-12 images ">
                  <div className='bee_img'>
                    <img src={bee} alt="" />
                  </div>
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 1.2 }}
                    src={mode === 'dark' ? hero_slider1 : hero_slider1}
                     className="d-block mx-lg-auto img-fluid hero_img" alt="Bootstrap Themes" loading="lazy" />

                  <div className='bee2_img'>
                    <img src={bee2} alt="" />
                  </div>
                </motion.div>

             
            </div>
          </motion.div>
        </div>
      </div>
      <WChoose />
      <ACertification />
      <OurProduct />
      <PBenefit />
      <FCategory />
      <LNews />
      <BSocial />
      <Brand />
    </>
  );
}

export default Home;
