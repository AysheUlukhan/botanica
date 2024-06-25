import React from 'react'
import { useCart } from 'react-use-cart';
import BreadCrumb from '../components/BreadCrumb';
import { motion } from 'framer-motion';
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Basket = () => {
  const { isEmpty, items, updateItemQuantity, removeItem, cartTotal, emptyCart } = useCart();
  const breadcrumbItems = [
    { text: 'Home', link: '/' },
    { text: 'Basket', link: '/basket' },
  ];

  const total_price = () => {
    return cartTotal + 30;
  }

  return (
    <>
      <div className='basket'>
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
            >Basket</motion.h1>
            <BreadCrumb items={breadcrumbItems} />
          </div>
        </motion.div>
        {isEmpty ? <div className="my-5 d-flex align-items-center justify-content-center"><img src="https://supershopping.lk/images/home/Cart-empty.gif" /></div> : <div className='d-flex align-items-center justify-content-center flex-column'>
          <div className="container">
            <div className="row my-5">
              <div className="col-lg-7">
                <div className='lg-table d-none d-xl-block d-xxl-block d-lg-block d-md-block'>
                  <table className="table table-responsive text-center">
                    <tr className='table_head'>
                      <th scope="col">PRODUCT</th>
                      <th scope="col"></th>
                      <th scope="col">PRICE</th>
                      <th scope="col">QUANTITY</th>
                      <th scope="col">SUBTOTAL</th>
                      <th scope="col"></th>
                    </tr>
                    <tbody >
                      {items.map(item => (
                        <tr >
                          <td ><div className='border'><img width={100} src={item.front_img} alt={item.title} /></div></td>
                          <td>{item.title}</td>
                          <td>${item.price}</td>
                          <td>
                            <div className='quantity_btn '>
                              <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} >-</button>
                              <span className='mx-3'>{item.quantity}</span>
                              <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} >+</button>
                            </div>
                          </td>
                          <td>${item.price * item.quantity}.00</td>
                          <td className='trash_btn'><FaRegTrashCan onClick={() => { removeItem(item.id) }} /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className='my-5 border p-4 sm_basket_card d-xl-none d-xxl-non d-lg-none d-md-none'>
                  {
                    items.map((item) => (
                      <div className='border-bottom'>
                        <div className='d-flex justify-content-end py-5'>
                          <FaRegTrashCan onClick={() => { removeItem(item.id) }} />
                        </div>

                        <div className='d-flex justify-content-between align-items-center border-bottom pb-4'>
                          <p className='card_head'>PRODUCT:</p>
                          <div className='border'><img width={100} src={item.front_img} alt={item.title} /></div>
                          <p>{item.title}</p>
                        </div>

                        <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                          <p className='card_head'>PRICE:</p>
                          <span>{item.price}</span>
                        </div>

                        <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                          <p className='card_head'>QUANTITY:</p>
                          <div className='quantity_btn '>
                            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} >-</button>
                            <span className='mx-3'>{item.quantity}</span>
                            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} >+</button>
                          </div>
                        </div>

                        <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                          <p className='card_head'>SUBTOTAL:</p>
                          <span>${item.price * item.quantity}.00</span>
                        </div>
                      </div>
                    ))
                  }
                </div>

                {/* <h4 className='my-5'>Total price:<span className='text-danger'> ${cartTotal}.00</span></h4>
                <button className=' btn btn-dark' onClick={() => { emptyCart() }}>Clear all</button> */}
              </div>

              <div className='col-lg-5 cart_total'>
                <div className='cart_total_head'>
                  <h5>CART TOTALS</h5>
                </div>
                <div className='cart_total_content'>
                  <div >
                    <div className='d-flex justify-content-between border-bottom pb-3 '>
                      <p>Subtotal</p>
                      <span>${cartTotal}.00</span>
                    </div>
                    <div className='border-bottom py-3'>
                      <p className='pb-2'>Shippping</p>
                      <span className='pickup'>Local pickup: $30.00</span>
                    </div>

                    <div className='d-flex justify-content-between pt-3'>
                      <p>Total</p>
                      <span className='total_price'>${total_price()}.00</span>
                    </div>
                    <Link className='mt-5'>PROCEED TO CHECKOUT</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>}
      </div>

    </>
  )
}

export default Basket