import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const ForgotPass = () => {
    return (
        <div className='reset_pass'>
            <div className='left'></div>
            <div className='right'>
                <div className="logo mb-5">
                    <img src={logo} alt="logo" />
                </div>

                <div className="right-content">
                    <h5>Reset password</h5>
                    <p>
                        Got your password?{" "}
                        <span>
                            <NavLink to={"/login"}>Login</NavLink>
                        </span>
                    </p>
                </div>

                <form>
                    <div className="wrapper">

                        <div className="input-data">
                            <input
                                type="email"
                                name="username"
                                required
                            />
                            <label>Email</label>
                        </div>

                        <div className="pt-4">
                            <button type="submit">Request my password</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotPass