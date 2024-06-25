import React, { useContext, useEffect, useState } from 'react';
import { HiOutlineMenuAlt1, HiOutlineSun } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import logo from '../assets/images/logo.png';
import { AiOutlineUser } from "react-icons/ai";
import { GoHeart, GoChevronRight } from "react-icons/go";
import { FaBasketShopping, FaRegTrashCan } from "react-icons/fa6";
import { TfiClose } from "react-icons/tfi";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaFacebookF, FaTiktok, FaTwitter, FaInstagram } from "react-icons/fa";
import { useCart } from 'react-use-cart';
import slugify from 'react-slugify';
import { useWishlist } from 'react-use-wishlist';
import { IoMoonOutline } from "react-icons/io5";
import { ModeContext } from '../context/ModeContext';
import { RiUserHeartLine } from "react-icons/ri";

const Header = () => {
    const { items, removeItem, cartTotal, totalItems } = useCart();
    const { totalWishlistItems } = useWishlist();
    const [mode, setMode] = useContext(ModeContext);
    const location = useLocation();

    const token = localStorage.getItem('token');
    const [user, setUser] = useState(null);
    const [admin, setAdmin] = useState(null);

    // const token = localStorage.getItem('token');
    useEffect(() => {
        if (token) {
            const adminData = JSON.parse(localStorage.getItem('adminData'));
            const userData = JSON.parse(localStorage.getItem('userdata'));
            const users = JSON.parse(localStorage.getItem('users')) || [];

            if (adminData) {
                setAdmin(adminData);
            } else if (userData) {
                const loggedInUser = users.find(u => u.email === userData.email);
                setUser(loggedInUser);
            }
        }
    }, []);



    if (
        location.pathname !== "/404" &&
        location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/reset_password"
    ) {
        return (
            <>
                <header className="xl_header d-none d-xl-block d-xxl-block d-lg-block">
                    <nav className='container'>
                        <div className='px-3 d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center gap-4'>
                                <HiOutlineMenuAlt1 data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" className='menu' />

                                <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                    <div className="offcanvas-header d-flex justify-content-end">
                                        <TfiClose data-bs-dismiss="offcanvas" className='close_btn' aria-label="Close" />
                                    </div>
                                    <div className="offcanvas-body">
                                        <ul className='d-block'>
                                            <NavLink to="/" className='nav-link d-block d-flex justify-content-between align-items-center' activeclassname="active">Home<GoChevronRight /></NavLink>
                                            <NavLink to="/about" className='nav-link d-flex justify-content-between align-items-center'>About<GoChevronRight /></NavLink>
                                            <NavLink to="/shop" className='nav-link d-flex justify-content-between align-items-center'>Shop<GoChevronRight /></NavLink>
                                            <NavLink to="/blog" className='nav-link d-flex justify-content-between align-items-center'>Blog<GoChevronRight /></NavLink>
                                            <NavLink to="/contact" className='nav-link d-flex justify-content-between align-items-center'>Contact<GoChevronRight /></NavLink>
                                        </ul>
                                    </div>

                                    <div className='nav_footer p-4'>
                                        <div>
                                            <p><span>Email:</span> +0123-456-789</p>
                                        </div>
                                        <div className='pt-2'>
                                            <p><span>Call Us:</span> example@domain.com</p>
                                        </div>

                                        <div className='d-flex gap-3 pt-3'>
                                            <div className='icons'><FaFacebookF /></div>
                                            <div className='icons'><FaTwitter /></div>
                                            <div className='icons'><FaInstagram /></div>
                                            <div className='icons'><FaTiktok /></div>
                                        </div>
                                    </div>
                                </div>

                                <div className='nav-search d-flex align-items-center gap-2'>
                                    <FiSearch className='search' />
                                    <input type="text" placeholder='Enter Your Keyword' />
                                </div>
                            </div>
                            <Link to="/" className='logo'>
                                <img src={logo} alt="logo" />
                            </Link>
                            <div className='nav-right'>
                                <div className='icon' onClick={() => {
                                    setMode(prevMode => {
                                        const newMode = prevMode === "light" ? "dark" : "light";
                                        localStorage.setItem("mode", newMode);
                                        return newMode;
                                    });
                                }}>
                                    {mode === "light" ? <IoMoonOutline /> : <HiOutlineSun />}
                                </div>

                                {/* {
                                    token ? <Link to='/wishlist' className='icon position-relative'>
                                        <GoHeart />
                                        <span className='position-absolute top-0 translate-middle badge rounded-pill'>{totalWishlistItems}</span>
                                    </Link> : ""
                                } */}


                                <Link to='/wishlist' className='icon position-relative'>
                                    <GoHeart />
                                    <span className='position-absolute top-0 translate-middle badge rounded-pill'>{totalWishlistItems}</span>
                                </Link>



                                {/* {
                                    token ? <div className='icon position-relative' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                        <FaBasketShopping />
                                        <span className='position-absolute top-0 translate-middle badge rounded-pill'> {totalItems}</span>
                                    </div> : ""
                                } */}

                                <div className='icon position-relative' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                    <FaBasketShopping />
                                    <span className='position-absolute top-0 translate-middle badge rounded-pill'> {totalItems}</span>
                                </div>


                                {/* <div>
                                    {admin ? (
                                        <div className="dropdown">
                                            <a className="icon" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <RiUserHeartLine />
                                            </a>
                                            <ul className="dropdown-menu mt-2">
                                                <div className='px-3'>
                                                    <h6>{admin.name}</h6>
                                                    <p>{admin.email}</p>
                                                </div>
                                                <li><a className="dropdown-item" href="#">Account</a></li>
                                                <li><a className="dropdown-item" href="#">Dashboard</a></li>
                                                <li><button onClick={() => { localStorage.removeItem('token'); localStorage.removeItem('adminData'); window.location.assign('/'); }} className="dropdown-item logout">Log out</button></li>
                                            </ul>
                                        </div>
                                    ) : user ? (
                                        <div className="dropdown">
                                            <a className="icon" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <RiUserHeartLine />
                                            </a>
                                            <ul className="dropdown-menu mt-2">
                                                <div className='px-3'>
                                                    <h6>{user.name} {user.surname}</h6>
                                                    <p>{user.email}</p>
                                                </div>
                                                <li><a className="dropdown-item" href="#">Account</a></li>
                                                <li><button onClick={() => { localStorage.removeItem('token'); localStorage.removeItem('userdata'); window.location.assign('/'); }} className="dropdown-item logout">Log out</button></li>
                                            </ul>
                                        </div>
                                    ) : (
                                        <Link to='/login' className='icon'>
                                            <AiOutlineUser />
                                        </Link>
                                    )}
                                </div> */}


                                {/* {
                                    localStorage.getItem('adminLogin') === 'true' ?
                                        <div className="dropdown">
                                            <a className="icon" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <RiUserHeartLine />
                                            </a>
                                            <ul className="dropdown-menu mt-2">
                                                <div className='px-3'>
                                                    <h6>admin</h6>
                                                    <p>sdfd</p>
                                                </div>
                                                <li><a className="dropdown-item" href="#">Account</a></li>
                                                <li><a className="dropdown-item" href="#">Dashboard</a></li>
                                                <li><button onClick={() => { localStorage.removeItem('token'); localStorage.removeItem('adminData'); window.location.assign('/'); }} className="dropdown-item logout">Log out</button></li>
                                            </ul>
                                        </div> :  <div className="dropdown">
                                            <a className="icon" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <RiUserHeartLine />
                                            </a>
                                            <ul className="dropdown-menu mt-2">
                                                <div className='px-3'>
                                                    <h6>user</h6>
                                                    <p>sfsd</p>
                                                </div>
                                                <li><a className="dropdown-item" href="#">Account</a></li>
                                                <li><button onClick={() => { localStorage.removeItem('token'); localStorage.removeItem('adminData'); window.location.assign('/'); }} className="dropdown-item logout">Log out</button></li>
                                            </ul>
                                        </div> 
                                } */}



                                <Link to='/login' className='icon'>
                                    <AiOutlineUser />
                                </Link>

                                {

                                    localStorage.getItem('adminLogin') === 'true' ?
                                        <div className="dropdown">
                                            <a className="icon" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <RiUserHeartLine />
                                            </a>
                                            <ul className="dropdown-menu mt-2">
                                                <div className='px-3'>
                                                    <h6>admin</h6>
                                                    <p>sdfd</p>
                                                </div>
                                                <li><a className="dropdown-item" href="#">Account</a></li>
                                                <li><a className="dropdown-item" href="#">Dashboard</a></li>
                                                <li><button onClick={() => { localStorage.removeItem('token'); localStorage.removeItem('adminLogin'); window.location.assign('/'); }} className="dropdown-item logout">Log out</button></li>
                                            </ul>
                                        </div> :  <div className="dropdown">
                                            <a className="icon" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <RiUserHeartLine />
                                            </a>
                                            <ul className="dropdown-menu mt-2">
                                                <div className='px-3'>
                                                    <h6>user</h6>
                                                    <p>sdfd</p>
                                                </div>
                                                <li><a className="dropdown-item" href="#">Account</a></li>
                                                <li><button onClick={() => { localStorage.removeItem('token'); localStorage.removeItem('token'); window.location.assign('/'); }} className="dropdown-item logout">Log out</button></li>
                                            </ul>
                                        </div>
                                }




                                <div className="offcanvas offcanvas-end basket_menu" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                    <div className="offcanvas-header d-flex gap-3">
                                        <div className='position-relative'>
                                            <FaBasketShopping className='fs-2' />
                                            <span className='position-absolute top-0 translate-middle badge rounded-pill'> {totalItems}</span>
                                        </div>
                                        <h6 className="offcanvas-title" id="offcanvasRightLabel">SHOPPING CART</h6>
                                    </div>
                                    <div className="offcanvas-body">
                                        {items.map(item => (
                                            <div className='basket' key={item.id}>
                                                <div className='d-flex justify-content-between align-items-center shop-cards mb-3'>
                                                    <div><img width={100} src={item.front_img} alt={item.title} /></div>
                                                    <div>
                                                        <NavLink to={`/shop/${slugify(item.title)}`}>{item.title}</NavLink>
                                                        <span>{item.quantity} x <b>${item.price}</b></span>
                                                    </div>
                                                    <div><FaRegTrashCan onClick={() => { removeItem(item.id) }} /></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='basket_subtotal p-3'>
                                        <div className='d-flex justify-content-between'>
                                            <p>SUBTOTAL:</p>
                                            <span>${cartTotal}</span>
                                        </div>

                                        <div className='basket_footer'>
                                            <Link to="/basket" className='view_cart'>VIEW CART</Link>
                                            <Link className='cart_check'>CHECKOUT</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>

                <header className='sm_header d-xl-none d-xxl-none d-lg-none'>
                    <nav className="container">
                        <div className='d-flex justify-content-between align-items-center py-3'>
                            <div className='d-flex align-items-center gap-3'>
                                <HiOutlineMenuAlt1 data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" className='res_menu' />
                                <FiSearch />
                            </div>

                            <div className='logo'>
                                <img src={logo} alt="" />
                            </div>

                            <div className='nav-right'>
                                <div className='icon' onClick={() => {
                                    setMode(prevMode => {
                                        const newMode = prevMode === "light" ? "dark" : "light";
                                        localStorage.setItem("mode", newMode);
                                        return newMode;
                                    });
                                }}>
                                    {mode === "light" ? <IoMoonOutline /> : <HiOutlineSun />}
                                </div>
                                <div className='icon'>
                                    <AiOutlineUser />
                                </div>

                                <Link to='/wishlist' className='icon position-relative'>
                                    <GoHeart />
                                    <span className='position-absolute top-0 translate-middle badge rounded-pill'>{totalWishlistItems}</span>
                                </Link>

                                <Link to='/basket' className='icon position-relative'>
                                    <FaBasketShopping />
                                    <span className='position-absolute top-0 translate-middle badge rounded-pill'>{totalItems}</span>
                                </Link>
                            </div>

                            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                <div className="offcanvas-header d-flex justify-content-end">
                                    <TfiClose data-bs-dismiss="offcanvas" aria-label="Close" className='close_btn' />
                                </div>
                                <div className="offcanvas-body">
                                    <ul className='d-block'>
                                        <NavLink to="/" className='nav-link d-block d-flex justify-content-between align-items-center' activeclassname="active">Home<GoChevronRight /></NavLink>
                                        <NavLink to="/about" className='nav-link d-flex justify-content-between align-items-center'>About<GoChevronRight /></NavLink>
                                        <NavLink to="/shop" className='nav-link d-flex justify-content-between align-items-center'>Shop<GoChevronRight /></NavLink>
                                        <NavLink to="/blog" className='nav-link d-flex justify-content-between align-items-center'>Blog<GoChevronRight /></NavLink>
                                        <NavLink to="/contact" className='nav-link d-flex justify-content-between align-items-center'>Contact<GoChevronRight /></NavLink>
                                    </ul>
                                </div>

                                <div className='nav_footer p-4'>
                                    <div><p><span>Email:</span> +0123-456-789</p></div>
                                    <div className='pt-2'><p><span>Call Us:</span> example@domain.com</p></div>
                                    <div className='d-flex gap-3 pt-3'>
                                        <div className='icons'><FaFacebookF /></div>
                                        <div className='icons'><FaTwitter /></div>
                                        <div className='icons'><FaInstagram /></div>
                                        <div className='icons'><FaTiktok /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        );
    } else {
        return null;
    }
}

export default Header;
