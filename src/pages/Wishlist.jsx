import React from 'react'
import { useWishlist } from 'react-use-wishlist';
import BreadCrumb from '../components/BreadCrumb';
import { motion } from 'framer-motion';
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';
import { toast } from 'react-toastify';
import { useCart } from 'react-use-cart';


const Wishlist = () => {
  const breadcrumbItems = [
    { text: 'Home', link: '/' },
    { text: 'Wishlist', link: '/wishlist' },
  ];
  const {
    isWishlistEmpty,
    totalWishlistItems,
    items,
    removeWishlistItem,
  } = useWishlist();
  const { addItem } = useCart();


  const handleAddToCart = (item) => {
    addItem(item);
    toast.success('Məhsul sebətə əlavə edildi.');
  };
  return (
    <div className='wishlist'>
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
          >Wishlist</motion.h1>
          <BreadCrumb items={breadcrumbItems} />
        </div>
      </motion.div>
      {isWishlistEmpty ? <div className="my-5 d-flex align-items-center justify-content-center"><img src="https://supershopping.lk/images/home/Cart-empty.gif" /></div> : <div className='d-flex align-items-center justify-content-center flex-column'>
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-12">

              {
                items.map((item) => (
                  <div className='wishlist_card d-flex align-items-center justify-content-between border p-3 mb-3'>
                    <div className='d-flex gap-4 align-items-center'>
                      <div className='wish_trash'>
                        <FaRegTrashCan className='wish_trash_icon' onClick={() => { removeWishlistItem(item.id) }} />
                      </div>
                      <div className='d-flex gap-4 align-items-center'>
                        <Link to={`/shop/${slugify(item.title)}`}><img width={70} src={item.frontImg} alt={item.title} /></Link>
                        <div>
                          <Link to={`/shop/${slugify(item.title)}`} className='wish_title'>{item.title}</Link>
                          <p className='mt-3 wish_price'>${item.price}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button className='wish_add_cart' onClick={() => handleAddToCart(item)}>ADD TO CART</button>
                    </div>
                  </div>
                ))
              }

            </div>

          </div>
        </div>

      </div>}
    </div>
  )
}

export default Wishlist



