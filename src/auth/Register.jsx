import React, { useRef, useState } from 'react';
import logo from '../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import supabase from '../config/connectdb';

const Register = () => {
  const [checked, setChecked] = useState(false);
  const nameRef = useRef(null);
  const surnameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const againPassRef = useRef(null);


  const registerSubmit = e => {
    e.preventDefault();
    if (!nameRef.current.value ||
      !surnameRef.current.value ||
      !emailRef.current.value ||
      !passRef.current.value ||
      !againPassRef.current.value) {
      toast.warning('Please, fill input');
    } else {
      if (passRef.current.value !==
        againPassRef.current.value) {
        toast.warning('Şifrələr uyğun gəlmir!');
      } else {
        const createUser = async () => {
          const { error } = await supabase.from('users').insert({
            name: nameRef.current.value,
            surname: surnameRef.current.value,
            email: emailRef.current.value,
            password: passRef.current.value
          });
          if (error) {
            console.log(error.message);
            toast.error("Something is wrong");
          } else {
            toast.success("Account was created! Redirected in 2 seconds");
            setTimeout(() => {
              window.location.assign('/login');
            }, 2000);
          }
        }
        createUser();

      }
    }
  }

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
    <div className='register'>
      <div className="left"></div>
      <div className="right">
        <div className="logo mb-5">
          <img src={logo} alt="logo" />
        </div>
        <div className="right-content">
          <h5>Yeni hesab yarat</h5>
          <p>
            Hesabınız yoxdur?{" "}
            <span>
              <NavLink to={"/login"}>Giriş</NavLink>
            </span>
          </p>
        </div>

        <form onSubmit={registerSubmit}>
          <div className="wrapper">
            <div className="input-data">
              <input
                type="text"
                name="name"
                ref={nameRef}
              />
              <label>Ad</label>
            </div>

            <div className="input-data mt-4">
              <input
                type="text"
                name="surname"
                ref={surnameRef}
              />
              <label>Soyad</label>
            </div>

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
                type={showPassword.password1 ? "text" : "password"}
                name="password"
                ref={passRef}
              />
              <div
                className="password-toggle"
                onClick={() => togglePasswordVisibility("password1")}
              >
                {showPassword.password1 ? (
                  <FaEyeSlash style={{ color: 'black' }} />
                ) : (
                  <FaEye style={{ color: 'black' }} />
                )}
              </div>
              <label>Şifrə</label>
            </div>

            <div className="input-data mt-4">
              <input
                type={showPassword.password2 ? "text" : "password"}
                name="password"
                ref={againPassRef}
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
              <label>Təkrar Şifrə</label>
            </div>

            <div className="pt-4">
              <button type="submit">Qeydiyyat</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
