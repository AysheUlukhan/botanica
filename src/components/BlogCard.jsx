import React from 'react';
import img1 from '../assets/images/blog-img1.webp';
import img2 from '../assets/images/blog-img-2.webp';
import img3 from '../assets/images/blog-img-3.webp';
import { CiUser } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import slugify from 'react-slugify';

const BlogCard = ({ blogData, page }) => {
    const colClass = page === 'home' ? 'col-lg-4' : 'col-lg-6';

    return (
        <div className={colClass + " blog_card"}>
            <div className="card">
                <div className='card-img'>
                    <img src={blogData.img} className="w-100 d-block mx-lg-auto img-fluid" alt="" />
                </div>
                <div className='card-content pt-4 p-3'>
                    <div className='d-flex justify-content-between align-items-center content-head'>
                        <p className='d-flex align-items-center gap-2'><CiUser /> <span>{blogData.user}</span></p>
                        <p className='d-flex align-items-center gap-2'><FaRegCalendarAlt /><span>{blogData.date}</span></p>
                    </div>
                    <div className='content-medium pt-3'>
                        <h6>{blogData.title}</h6>
                        <Link to={`/blog/${slugify(blogData.title)}`} className='d-flex gap-2 align-items-center pt-3'>Read more <BsArrowRight /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;
