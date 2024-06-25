import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import { motion } from 'framer-motion';
import { blogData } from '../api/blogData';
import { Link, useParams } from 'react-router-dom';
import slugify from 'react-slugify';
import { CiUser } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";

const BlogDetail = () => {

    const { slug } = useParams();
    const blogDetails = blogData.find(p => slugify(p.title) === slug);
    const recentBlogs = blogData.slice(-4).reverse();

    const breadcrumbItems = [
        { text: 'Home', link: '/' },
        { text: blogDetails.title, link: `/blog/${slug}` },
    ];

    return (
        <div className='blog_detail'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                className="banner" >
                <div>
                    <BreadCrumb items={breadcrumbItems} />
                </div>
            </motion.div>

            <div className='container py-5'>
                <div className="row">
                    <div className="col-lg-4">
                        <div className='recent_posts mt-4'>
                            <div className='mb-4'>
                                <h6 className='pb-3'>Recent Posts</h6>
                            </div>
                            {
                                recentBlogs.map((item) => (
                                    <div className='d-flex align-items-center gap-3 mb-4' key={item.id}>
                                        <div className='recent_img'><img src={item.img} alt={item.title} className="d-block mx-lg-auto img-fluid" /></div>
                                        <div>
                                            <Link to={`/blog/${slugify(item.title)}`}>{item.title}</Link>
                                            <p className='d-flex align-items-center gap-2 date'><FaRegCalendarAlt /><span>{item.date}</span></p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-lg-7 blogdetail_content">
                        <img src={blogDetails.img} className="w-100 d-block mx-lg-auto img-fluid" alt="" />

                        <div className='pt-3'>
                            <h5>{blogDetails.title}</h5>
                            <div className='d-flex gap-5 content-head'>
                                <p className='d-flex align-items-center gap-2'><CiUser /> <span>{blogDetails.user}</span></p>
                                <p className='d-flex align-items-center gap-2'><FaRegCalendarAlt /><span>{blogDetails.date}</span></p>
                            </div>
                            <p className='pt-4'>{blogDetails.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetail;
