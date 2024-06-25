import React from 'react';
import img404 from '../assets/images/404-error-page.gif'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='notfound'>
            <img src={img404} className="d-block mx-lg-auto img-fluid" alt="" />

            <div className='pt-5'>
                <h4>PAGE NOT FOUND</h4>
                <p>We’re sorry — something has gone wrong on our end.</p>

                <div className='mt-5'>
                <Link to='/'>BACK TO HOME PAGE</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound