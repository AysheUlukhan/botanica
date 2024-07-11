import React from 'react';
import BlogCard from '../../../../components/BlogCard';
import { blogData } from '../../../../api/blogData';
import img_title from '../../../../assets/images/icon-title.webp'
const LNews = () => {
    return (
        <div className='latest-news pt-5'>
            <div className="container">
                <div className="row row-gap-5">
                    <div className='lnews-head'>
                        <img src={img_title} alt="" />
                        <h6>Latest News</h6>
                        <h5>From Our Blog</h5>
                    </div>

                    {
                        blogData.slice(0, 3).map((item) => (

                            <BlogCard blogData={item} key={item.id} page="home" />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default LNews