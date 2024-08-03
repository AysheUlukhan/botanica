import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BreadCrumb from '../components/BreadCrumb';
import BlogCard from '../components/BlogCard';
import { blogData } from '../api/blogData';
import { IoMenu, IoSearchOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';
import Pagination from 'antd/lib/pagination';

const Blog = () => {
  const [category, setCategory] = useState([]);
  const [filtered, setFiltered] = useState(blogData);
  const [active, setActive] = useState("All News");
  const [search, setSearch] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);

  const breadcrumbItems = [
    { text: 'Home', link: '/' },
    { text: 'Blog', link: '/blog' },
  ];

  useEffect(() => {
    const categories = ['All News', ...new Set(blogData.map(item => item.category))];
    setCategory(categories);
  }, []);

  useEffect(() => {
    if (search) {
      const searchResults = blogData.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setFiltered(searchResults);
      setCurrentPage(1);
    } else {
      filterData(active);
    }
  }, [search]);

  const filterData = (cat) => {
    if (cat === 'All News') {
      setFiltered(blogData);
      setActive("All News");
    } else {
      const filteredDt = blogData.filter(p => p.category === cat);
      setFiltered(filteredDt);
      setActive(cat);
    }
    setCurrentPage(1);
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filtered.slice(indexOfFirstBlog, indexOfLastBlog);

  const recentBlogs = blogData.slice(-4).reverse();

  return (
    <div className='blog'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        className="banner" >
        <div>
          <motion.h1
            initial={{ opacity: 0, y: '-10%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-10%' }}
            transition={{ duration: 1.2 }}
          >Blog</motion.h1>
          <BreadCrumb items={breadcrumbItems} />
        </div>
      </motion.div>

      <div className='container py-5'>
        <div className="row">
          <div className="col-lg-4">
            <div className='blog_category'>
              <div className='cat_head'>
                <IoMenu className='icon' />
                <p>Categories</p>
              </div>
              <div className='cat_content'>
                {category.map((item, index) => (
                  <div key={index} className={`d-flex cat_content_item align-items-center mb-2 gap-3 ${active === item ? "active" : ""}`}>
                    <div className='point'></div>
                    <p onClick={() => filterData(item)}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className='blog_search mt-4'>
              <div className='search_input'>
                <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Enter your keyword' />
                <button><IoSearchOutline /></button>
              </div>
            </div>

            <div className='recent_posts mt-4'>
              <div className='mb-4'>
                <h6 className='pb-3'>Recent Posts</h6>
              </div>
              {
                recentBlogs.map((item) => (
                  <div className='d-flex align-items-center gap-3 mb-4'>
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
          <div className="col-lg-8">
            <div className="row row-gap-5">
              {currentBlogs.length === 0 ? (
                <img src='https://cdn.dribbble.com/users/406903/screenshots/6723682/drawkit-grape-pack-illustration-3-dribbble-export-v0.1.gif' alt="No results found" />
              ) : (
                currentBlogs.map((item) => (
                  <BlogCard blogData={item} key={item.id} page="blog" />
                ))
              )}
            </div>
            <div className='text-center mt-5'>
              <Pagination
                current={currentPage}
                total={filtered.length}
                pageSize={blogsPerPage}
                onChange={handlePageChange}
                className="mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
