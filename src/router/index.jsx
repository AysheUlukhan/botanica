import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate
} from "react-router-dom";
import Home from '../pages/Home'
import Blog from '../pages/Blog'
import Product from '../pages/Product'
import Shop from '../pages/Shop'
import Footer from '../layout/Footer';
import { motion } from 'framer-motion';
import Header from '../layout/Header';
import GoToTop from '../components/GotoTop';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Faq from '../pages/Faq';
import BlogDetail from '../pages/BlogDetail';
import Login from '../auth/Login';
import Register from '../auth/Register';
import ForgotPass from '../auth/ForgotPass';
import Wishlist from '../pages/Wishlist';
import ShopDetail from '../pages/ShopDetail';
import Basket from '../pages/Basket';
import Dashboard from '../dashboard/Dashboard';
import Users from '../dashboard/Users';
import AddProduct from '../dashboard/AddProduct';
import EditProduct from '../dashboard/EditProduct';
import Preloader from '../components/Preloader';
import Checkout from '../pages/Checkout';
import Account from '../pages/Account';
import Thankyou from '../pages/Thankyou';



const AppRouter = () => {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setInitialLoading(false);
    }, 1000);
  }, []);

  if (initialLoading) {
    return <Preloader />;
  }

  return (
    <>
      
          <Router>
              <Header />
              <Routes>
                <Route element={<Home />} path='/' />
                <Route element={<About />} path='/about' />
                <Route element={<Blog />} path='/blog' />
                <Route element={<Product />} path='/product' />
                <Route element={<Shop />} path='/shop' />
                <Route element={<Contact />} path='/contact' />
                <Route path="*" element={<Navigate replace to="/404" />} />
                <Route element={<NotFound />} path='/404' />
                <Route element={<Faq />} path='/faq' />
                <Route element={<BlogDetail />} path='/blog/:slug' />
                <Route element={<Login />} path='/login' />
                <Route element={<Register />} path='/register' />
                <Route element={<ForgotPass />} path='/reset_password' />
                <Route element={<Wishlist />} path='/wishlist' />
                <Route element={<ShopDetail />} path='/shop/:slug' />
                <Route element={<Basket />} path='/basket' />
                <Route element={<Dashboard />} path='/dashboard' />
                <Route element={<Users />} path='/dashboard/users' />
                <Route element={<AddProduct />} path='/dashboard/add' />
                <Route element={<EditProduct />} path='/dashboard/edit/:slug' />
                <Route element={<Checkout />} path='/checkout' />
                <Route element={<Account />} path='/account' />
                <Route element={<Thankyou />} path='/thankyou' />
              </Routes>
              <GoToTop />
              <Footer />
          </Router>
   
    </>
  )
}

export default AppRouter