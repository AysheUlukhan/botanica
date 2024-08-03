import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb';
import { motion } from 'framer-motion';
import { useCart } from 'react-use-cart';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
const Checkout = () => {
  const { items,cartTotal, } = useCart();
  const breadcrumbItems = [
    { text: 'Home', link: '/' },
    { text: 'Checkout', link: '/checkout' },
  ];
  const total_price = () => {
    return cartTotal + 30;
  }

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [cardDate, setCardDate] = useState("")
  const [cvc, setCvc] = useState("")

  const checkoutSubmit = e => {
    e.preventDefault();

    if (!name || !surname || !email || !address || !cardNumber || !cardDate || !cvc) {
      toast.error("Boş buraxmayın")
    }
  }
  return (
    <div className='checkout'>
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
          >Checkout</motion.h1>
          <BreadCrumb items={breadcrumbItems} />
        </div>
      </motion.div>

      <div className='container my-5'>
        <form onSubmit={checkoutSubmit}>
          <div className="row">
            <div className="col-lg-8">
              <h3>Billing details</h3>
              <hr />
              <div className="row">
                <div className="col-lg-12">
                  <div className='input-data'>
                    <label htmlFor="">First name</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                  </div>
                </div>
                <div className="col-lg-12 mt-3">
                  <div className='input-data'>
                    <label htmlFor="">Last name</label>
                    <input type="text" value={surname} onChange={e => setSurname(e.target.value)} />
                  </div>
                </div>
                <div className="col-lg-12 mt-3">
                  <div className='input-data'>
                    <label htmlFor="">Email</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                  </div>
                </div>

                <div className="col-lg-12 mt-3">
                  <div className='input-data'>
                    <label htmlFor="">Address</label>
                    <input type="text" value={address} onChange={e => setAddress(e.target.value)} />
                  </div>
                </div>

                <div className="col-lg-12 mt-3">
                  <div className='input-data'>
                    <label htmlFor="">Card Number</label>
                    <input type="text" placeholder='**** **** **** ****' value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
                  </div>
                </div>

                <div className="col-lg-6 mt-3">
                  <div className='input-data'>
                    <label htmlFor="">Card Date</label>
                    <input type="text" placeholder='MM/YY' value={cardDate} onChange={e => setCardDate(e.target.value)} />
                  </div>
                </div>

                <div className="col-lg-6 mt-3">
                  <div className='input-data'>
                    <label htmlFor="">CVC</label>
                    <input type="text" placeholder='***' value={cvc} onChange={e => setCvc(e.target.value)} />
                  </div>
                </div>

              </div>
            </div>
            <div className='col-lg-4'>
              <div className='checkout-product'>
                <div className='head-order'>
                  <h5>YOUR ORDER</h5>
                </div>

                <div className='order-content'>
                  <div className='d-flex justify-content-between border-bottom py-3'>
                    <h6>Product</h6>
                    <h6>Subtotal</h6>
                  </div>

                  {
                    items.map((item) => (
                      <div className='d-flex justify-content-between border-bottom py-3'>
                        <p>{item.title} <span className='fw-medium'>x {item.quantity}</span></p>
                        <span>${item.price * item.quantity}.00</span>
                      </div>
                    ))
                  }
                  <div className='d-flex justify-content-between py-3'>
                    <h6>Subtotal</h6>
                    <span>${cartTotal}</span>
                  </div>

                  <div className='pb-3'>
                    <h6>Shipping</h6>
                    <span>Local pickup: $30.00</span>
                  </div>

                  <div className='d-flex justify-content-between'>
                    <h5>Total</h5>
                    <span>${total_price()}.00</span>
                  </div>
                  <div className='text-center my-3'>
                    <button type='submit' onClick={() => {
                      if (!name || !surname) {
                        window.scroll({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        })
                      } else{
                        window.location.assign('/thankyou')
                      }
                    }}>Payment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Checkout