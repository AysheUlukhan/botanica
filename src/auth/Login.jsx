import React, { useRef, useState } from 'react';
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const admin = {
    name: 'Admin',
    email: "admin@gmail.com",
    password: "admin123"
};

const normaluserdata = localStorage.getItem('userdata');
const normaluser = JSON.parse(normaluserdata)

const Login = () => {
    const [checked, setChecked] = useState(false);

    const emailRef = useRef();
    const passRef = useRef();

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     if (!emailRef.current.value || !passRef.current.value) {
    //         toast.warning('Zəhmət olmasa, bütün sahələri doldurun');
    //     } else {
    //         const email = emailRef.current.value;
    //         const password = passRef.current.value;

    //         const users = JSON.parse(localStorage.getItem('users')) || [];

    //         if (email === admin.email && password === admin.password) {
    //             localStorage.setItem('isAdmin', 'true');
    //             localStorage.setItem('adminData', JSON.stringify(admin));
    //             toast.success('Admin girişi uğurlu oldu');
    //             setTimeout(() => {
    //                 window.location.assign('/');
    //             }, 1500);
    //         } else {
    //             const user = users.find(user => user.email === email && user.password === password);
    //             if (user) {
    //                 toast.success('İstifadəçi girişi uğurlu oldu');
    //                 localStorage.setItem('isAdmin', 'false');
    //                 localStorage.setItem('token', crypto.randomUUID());
    //                 localStorage.setItem('userdata', JSON.stringify(user));
    //                 setTimeout(() => {
    //                     window.location.assign('/');
    //                 }, 1500);
    //             } else {
    //                 toast.error('Email və ya şifrə yalnışdır!');
    //             }
    //         }
    //     }
    // };

    const handleSubmit = e => {
        e.preventDefault();
        if (!emailRef.current.value || !passRef.current.value) {
            toast.warning('Zəhmət olmasa, bütün sahələri doldurun');
        } else {
            if (emailRef.current.value === admin.email && passRef.current.value === admin.password) {
                localStorage.setItem('adminLogin', 'true');
                localStorage.setItem('login', 'false');
                localStorage.setItem('adminToken', crypto.randomUUID())
                toast.success('Admin girişi uğurlu oldu');
                setTimeout(() => {
                    window.location.assign('/');
                }, 1500);
            } else {
                if (normaluser.email === emailRef.current.value && normaluser.password === passRef.current.value) {
                    localStorage.setItem('login', 'true');
                    localStorage.setItem('adminLogin', 'false');
                    localStorage.setItem('token', crypto.randomUUID())
                    toast.success('Istifadeci girişi uğurlu oldu');
                    setTimeout(() => {
                        window.location.assign('/');
                    }, 1500);
                } else {
                    toast.error('Email və ya şifrə yalnışdır!')
                }
            }


        }
    };

    const [showPassword, setShowPassword] = useState({
        password1: false,
        password2: false,
    });

    const togglePasswordVisibility = (field) => {
        setShowPassword((prevState) => ({
            ...prevState,
            [field]: !prevState[field],
        }));
    };

    return (
        <div className='login'>
            <div className='left'></div>
            <div className='right'>
                <div className="logo mb-5">
                    <img src={logo} alt="logo" />
                </div>
                <div className="right-content">
                    <h5>Xoş gəldiniz!</h5>
                    <p>
                        Hesabınız varmı?{" "}
                        <span>
                            <NavLink to={"/register"}>Qeydiyyatdan keçin</NavLink>
                        </span>
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="wrapper">
                        <div className="input-data mt-4">
                            <input
                                type="email"
                                name="email"
                                ref={emailRef}
                            />
                            <label>Email</label>
                        </div>

                        <div className="input-data mt-4">
                            <input
                                type={showPassword.password2 ? "text" : "password"}
                                name="password"
                                ref={passRef}
                            />
                            <div
                                className="password-toggle"
                                onClick={() => togglePasswordVisibility("password2")}
                            >
                                {showPassword.password2 ? (
                                    <FaEyeSlash style={{ color: 'black' }} />
                                ) : (
                                    <FaEye style={{ color: 'black' }} />
                                )}
                            </div>
                            <label>Şifrə</label>
                        </div>

                        <div className="d-flex justify-content-between pt-4 form-remember">
                            <div className="d-flex gap-2">
                                <label className="checkbox-container">
                                    <input
                                        type="checkbox"
                                        defaultChecked={checked}
                                        onChange={() => setChecked((state) => !state)}
                                    />
                                    <span className="checkmark me-2"></span>
                                    Yadda saxla
                                </label>
                            </div>
                            <p className="mb-0">
                                <NavLink to={"/reset_password"}>
                                    Şifrəni unutmusunuz?
                                </NavLink>
                            </p>
                        </div>

                        <div className="pt-4">
                            <button type="submit">Giriş</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
