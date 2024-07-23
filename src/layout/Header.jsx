import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { HiOutlineMenuAlt1, HiOutlineSun } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import logo from '../assets/images/logo.png';
import { AiOutlineUser } from "react-icons/ai";
import { GoHeart, GoChevronRight } from "react-icons/go";
import { FaBasketShopping, FaRegTrashCan } from "react-icons/fa6";
import { TfiClose } from "react-icons/tfi";
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaFacebookF, FaTiktok, FaTwitter, FaInstagram } from "react-icons/fa";
import { useCart } from 'react-use-cart';
import slugify from 'react-slugify';
import { useWishlist } from 'react-use-wishlist';
import { IoMoonOutline } from "react-icons/io5";
import { ModeContext } from '../context/ModeContext';
import { RiUserHeartLine } from "react-icons/ri";
import i18next from '../i18n/i18next';
import i18n from '../i18n/i18next';
import { useTranslation } from 'react-i18next';
import supabase from '../config/connectdb';
import { GrLanguage } from "react-icons/gr";
import { AiFillHome } from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { useSelector } from 'react-redux';

const Header = () => {
    const { items, removeItem, cartTotal, totalItems } = useCart();
    const { totalWishlistItems } = useWishlist();
    const [mode, setMode] = useContext(ModeContext);
    const location = useLocation();
    const [openLang, setOpenLang] = useState(false);
    const { pathname } = location;
    const navigate = useNavigate();
    const data = useSelector(p => p)
    const changeLang = (lang) => {
        i18n.changeLanguage(lang)
        setOpenLang(false);
    }

    const { t } = useTranslation();

    const logout = () => {
        localStorage.setItem('adminLogin', 'false');
        localStorage.setItem('login', 'false')
        window.location.reload();
    }

    const dash = () =>{
        navigate('/dashboard')
    }

    // const isExcludedPath = () => {
    //     const excludedPaths = [
    //         "/404",
    //         "/login",
    //         "/register",
    //         "/reset_password",
    //         "/dashboard",
    //         "/dashboard/users",
    //         "/dashboard/add"
    //     ];

    //     if (excludedPaths.includes(pathname)) {
    //         return true;
    //     }

    //     const dynamicPaths = [
    //         /^\/dashboard\/edit\/[^/]+$/
    //     ];

    //     return dynamicPaths.some((pattern) => pattern.test(pathname));
    // };

    // if (isExcludedPath()) {
    //     return null;
    // }



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

    const [search, setSearch] = useState("");

    const [showOptions, setShowOptions] = useState(false);
    const wrapperRef = useRef(null);

    const handleClickOutside = event => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setShowOptions(false);
        }
    };

    const filteredData = data.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if (isExcludedPath()) {
        return null;
    }

    return (
        <>
            <header className="xl_header d-none d-xl-block d-xxl-block d-lg-block">
                <nav className='container'>
                    <div className='px-3 d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center gap-4'>
                            <HiOutlineMenuAlt1 data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" className='menu' />

                            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel" >

                                <div className="offcanvas-header d-flex justify-content-between justify-content-end">
                                    <img width={100} src={logo} alt="logo" />
                                    <TfiClose data-bs-dismiss="offcanvas" className='close_btn' aria-label="Close" />
                                </div>
                                <div className="offcanvas-body">
                                    <ul className='d-block'>
                                        <NavLink to="/" className='nav-link d-block d-flex gap-1 align-items-center' activeclassname="active">{t("header.0")}</NavLink>
                                        <NavLink to="/about" className='nav-link d-flex justify-content-between align-items-center'>{t("header.1")}</NavLink>
                                        <NavLink to="/shop" className='nav-link d-flex gap-1 align-items-center'>{t("header.2")}</NavLink>
                                        <NavLink to="/blog" className='nav-link d-flex justify-content-between align-items-center'>{t("header.3")}</NavLink>
                                        <NavLink to="/contact" className='nav-link d-flex justify-content-between align-items-center'>{t("header.4")}</NavLink>
                                    </ul>
                                </div>

                                <div className='nav_footer p-4'>
                                    <div>
                                        <p><span>{t("header.5")}:</span> +0123-456-789</p>
                                    </div>
                                    <div className='pt-2'>
                                        <p><span>{t("header.6")}:</span> example@domain.com</p>
                                    </div>

                                    <div className='d-flex gap-3 pt-3'>
                                        <div className='icons'><FaFacebookF /></div>
                                        <div className='icons'><FaTwitter /></div>
                                        <div className='icons'><FaInstagram /></div>
                                        <div className='icons'><FaTiktok /></div>
                                    </div>
                                </div>
                            </div>
                            <div ref={wrapperRef} className='d-flex flex-column search_wrapper'>
                                <div className='nav-search d-flex align-items-center gap-2'>
                                    <FiSearch className='search' />
                                    <input
                                        onChange={e => {
                                            setSearch(e.target.value);
                                            setShowOptions(e.target.value !== "");
                                        }}
                                        type="text"
                                        placeholder='Enter Your Keyword'
                                        value={search}
                                    />
                                </div>
                                {
                                    showOptions && (
                                        <div className='search_options'>
                                            {
                                                filteredData.length === 0 ?
                                                    <div>Product not found</div> :
                                                    filteredData.map(item => (
                                                        <div key={item.id}>
                                                            <Link to={`/shop/${slugify(item.title)}`}>{item.title}</Link>
                                                        </div>
                                                    ))
                                            }
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <Link to="/" className='logo'>
                            <img src={logo} alt="logo" />
                        </Link>
                        <div className='nav-right'>

                            <div className='position-relative'>
                                <div className="icon" onClick={() => setOpenLang(prev => !prev)}>
                                    <GrLanguage />
                                </div>
                                {
                                    openLang && (
                                        <div className='position-absolute dropdown-lang' >
                                            <p onClick={() => changeLang('az')}>Az</p>
                                            <p onClick={() => changeLang('en')}>En</p>
                                        </div>
                                    )
                                }
                            </div>

                            <div className='icon' onClick={() => {
                                setMode(prevMode => {
                                    const newMode = prevMode === "light" ? "dark" : "light";
                                    localStorage.setItem("mode", newMode);
                                    return newMode;
                                });
                            }}>
                                {mode === "light" ? <IoMoonOutline /> : <HiOutlineSun />}
                            </div>

                            {
                                localStorage.getItem('adminLogin') === 'true' || localStorage.getItem('login') === 'true' ? <Link to='/wishlist' className='icon position-relative'>
                                    <GoHeart />
                                    <span className='position-absolute top-0 translate-middle badge rounded-pill'>{totalWishlistItems}</span>
                                </Link> : ""
                            }


                            {
                                localStorage.getItem('adminLogin') === 'true' || localStorage.getItem('login') === 'true' ? <div className='icon position-relative' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                    <FaBasketShopping />
                                    <span className='position-absolute top-0 translate-middle badge rounded-pill'> {totalItems}</span>
                                </div> : ""
                            }





                            {
                                localStorage.getItem('adminLogin') === 'true' ? <div className="dropdown">
                                    <a className="icon" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <RiUserHeartLine />
                                    </a>
                                    <ul className="dropdown-menu mt-2">
                                        <div className='px-3'>
                                            <h6>Admin</h6>
                                            <p>admin@gmail.com</p>
                                        </div>
                                        <li><Link className="dropdown-item" to={'/account'}>Account</Link></li>
                                        <li><button onClick={dash} className="dropdown-item">Dashboard</button></li>
                                        <li><button onClick={logout} className="dropdown-item logout">Log out</button></li>
                                    </ul>
                                </div> : localStorage.getItem('login') === 'true' ? <div className="dropdown">
                                    <a className="icon" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <RiUserHeartLine />
                                    </a>
                                    <ul className="dropdown-menu mt-2">
                                        <div className='px-3'>
                                            <h6>{localStorage.getItem('username')} {localStorage.getItem('surname')}</h6>
                                            <p>{localStorage.getItem('email')}</p>
                                        </div>
                                        <li><Link className="dropdown-item" to={'/account'}>Account</Link></li>
                                        <li><button onClick={logout} className="dropdown-item logout">Log out</button></li>
                                    </ul>
                                </div> : <Link to='/login' className='icon'>
                                    <AiOutlineUser />
                                </Link>
                            }


                            <div className="offcanvas offcanvas-end basket_menu" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                <div className="offcanvas-header d-flex gap-3">
                                    <div className='position-relative'>
                                        <FaBasketShopping className='fs-2' />
                                        <span className='position-absolute top-0 translate-middle badge rounded-pill'> {totalItems}</span>
                                    </div>
                                    <h6 className="offcanvas-title" id="offcanvasRightLabel">{t("header.7")}</h6>
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
            </header >

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

}

export default Header;
