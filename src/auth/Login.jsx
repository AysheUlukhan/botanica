import React, { useRef, useState } from 'react';
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import supabase from '../config/connectdb';

const adminuser = {
    name: 'Admin',
    email: "admin@gmail.com",
    password: "admin123"
};

const Login = () => {
    const [checked, setChecked] = useState(false);

    const emailRef = useRef();
    const passRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        if (!emailRef.current.value || !passRef.current.value) {
            toast.warning('Zəhmət olmasa, bütün sahələri doldurun');
        } else {
            if (emailRef.current.value === adminuser.email && passRef.current.value === adminuser.password) {
                localStorage.setItem('adminLogin', 'true');
                localStorage.setItem('login', 'false');
                toast.success('Admin girişi uğurlu oldu');
                setTimeout(() => {
                    window.location.assign('/');
                }, 1500);
            } else {
                const createLogin = (user, surname, email) => {
                    localStorage.setItem('login', 'true');
                    localStorage.setItem('adminLogin', 'false');
                    localStorage.setItem('username', user)
                    localStorage.setItem('surname', surname)
                    localStorage.setItem('email', email)
                    toast.success('Istifadeci girişi uğurlu oldu');
                    setTimeout(() => {
                        window.location.assign('/');
                    }, 1500);
                }
                const checkUser = async () => {
                    const { data, error } = await supabase.from('users').select();
                    if (error) {
                        console.log(error);
                    } else {
                        data.map((item) => (
                            item.email === emailRef.current.value && item.password === passRef.current.value ? createLogin(item.name, item.surname, item.email) : toast.error("Email or password is wrong!")
                        ))

                    }
                }
                checkUser();
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
