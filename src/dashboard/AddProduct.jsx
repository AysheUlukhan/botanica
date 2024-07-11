import React from 'react'
import ProductForm from './ProductForm'
import { useDispatch } from 'react-redux'
import { addProducToDatabase } from '../redux/actions/shopAction'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(p=>p)
  return (
    <div className=''>
      
      <ProductForm sendForm={(fd)=>{
        dispatch(addProducToDatabase(fd))
        toast.success('Product added')
        navigate('/dashboard');
      }}/>
    </div>
  )
}

export default AddProduct