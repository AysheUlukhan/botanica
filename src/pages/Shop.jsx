import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BreadCrumb from '../components/BreadCrumb';
import SingleProduct from '../components/SingleProduct';
import { CiGrid41 } from "react-icons/ci";
import { TfiLayoutGrid2Thumb } from "react-icons/tfi";
import { shopData } from '../api/shopData';
import { Select, Slider } from "antd";
import { useSelector } from 'react-redux';
import Pagination from 'antd/lib/pagination';

const Shop = () => {
  const data = useSelector(p => p)
  const [layout, setLayout] = useState('col-lg-4');
  const [activeIcon, setActiveIcon] = useState('grid');
  const [category, setCategory] = useState([]);
  const [filtered, setFiltered] = useState(data);
  const [active, setActive] = useState("All Products");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const { Option } = Select;

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  const getMinPrice = () => {
    return Math.min(...data.map(item => item.price));
  };

  const getMaxPrice = () => {
    return Math.max(...data.map(item => item.price));
  };

  const minPrice = getMinPrice();
  const maxPrice = getMaxPrice();

  useEffect(() => {
    const categories = ['All Products', ...new Set(data.map(item => item.category))];
    setCategory(categories);
  }, []);

  const filterData = (cat) => {
    let filteredData = data;

    if (cat !== 'All Products') {
      filteredData = filteredData.filter(p => p.category === cat);
    }

    filteredData = filteredData.filter(item => item.price >= priceRange[0] && item.price <= priceRange[1]);

    setFiltered(filteredData);
    setActive(cat);
    setCurrentPage(1);
  };

  const handleGridLayout = () => {
    setLayout('col-lg-4');
    setActiveIcon('grid');
  };

  const handleListLayout = () => {
    setLayout('col-lg-6');
    setActiveIcon('list');
  };

   const sortProducts = (sortType) => {
    let sortedProducts = [...filtered];
    if (sortType === "option1") {
      sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortType === "option2") {
      sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortType === "option3") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === "option4") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else {
      sortedProducts = data;
    }
    setFiltered(sortedProducts);
  }

  const handlePriceFilter = () => {
    filterData(active);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filtered.slice(indexOfFirstProduct, indexOfLastProduct);

  const breadcrumbItems = [
    { text: 'Home', link: '/' },
    { text: 'Shop', link: '/shop' },
  ];

  return (
    <div className='shop'>
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
          >Shop</motion.h1>
          <BreadCrumb items={breadcrumbItems} />
        </div>
      </motion.div>

      <div className="container py-5">
        <div className="row ">
          <div className="col-lg-3">
            <div className="shop_category">
              <div className='cat_head'>
                <p className='pb-3'>Categories</p>
              </div>

              <div className="cat_content pt-4">
                {category.map((item, index) => (
                  <div key={index} className={`mb-2 items gap-3 ${active === item ? "active" : ""}`}>
                    <p onClick={() => filterData(item)}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className='price_filter mt-4'>
              <div className='price_head mb-4'>
                <p className='pb-3'>Price</p>
              </div>

              <Slider 
                range={{ draggableTrack: true }} 
                defaultValue={priceRange} 
                min={minPrice}
                max={maxPrice}
                onChange={(value) => setPriceRange(value)}
              />
              <div className='d-flex justify-content-between align-items-center maxmin_price'>
                <p>$0</p>
                <p>${maxPrice}</p>
              </div>

              <div className='d-flex justify-content-between align-items-center ranger_price mt-3'>
                <p className='range'>Range : <span>${priceRange[0]}</span></p>
                <span>-</span>
                <span>${priceRange[1]}</span>
              </div>

              <div className='mt-3'>
                <button onClick={handlePriceFilter}>FILTER</button>
              </div>
            </div>
          </div>
          <div className="col-lg-9 shop_cards">
            <div className='showing_results d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center gap-4'>
                <div className='d-flex gap-2'>
                  <div
                    className={`grid-cards ${activeIcon === 'grid' ? 'active' : ''}`}
                    onClick={handleGridLayout}
                  >
                    <CiGrid41 />
                  </div>
                  <div
                    className={`grid-cards ${activeIcon === 'list' ? 'active' : ''}`}
                    onClick={handleListLayout}
                  >
                    <TfiLayoutGrid2Thumb />
                  </div>
                </div>
                <p>Showing {currentProducts.length} of {filtered.length} results</p>
              </div>
              <div className="custom-select">
                <Select
                  defaultValue=""
                  suffixIcon={null}
                  className="select"
                  popupClassName="custom-dropdown"
                  onChange={sortProducts}
                >
                  <Option value="">
                    Default Sorting
                  </Option>
                  <Option value="option1">A to Z</Option>
                  <Option value="option2">Z to A</Option>
                  <Option value="option3">From cheap to expensive</Option>
                  <Option value="option4">From expensive to cheap</Option>
                </Select>
              </div>
            </div>
            <div className="row">
              {
                currentProducts.map((item) => (
                  <div className={layout} key={item.id}>
                    <SingleProduct shopData={item} />
                  </div>
                ))
              }
            </div>
            <Pagination
              current={currentPage}
              total={filtered.length}
              pageSize={productsPerPage}
              onChange={handlePageChange}
              className='text-center mt-5'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
