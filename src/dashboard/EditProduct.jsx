import React from 'react'
import ProductForm from './ProductForm'
import { toast } from 'react-toastify'
import {  editProductToDatabase } from '../redux/actions/shopAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import slugify from 'react-slugify'

const EditProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { slug } = useParams();
  const data = useSelector(p => p);
  const filteredData = data.find(p => slugify(p.title) === slug)
  console.log(filteredData);

  return (
    <div>
      <ProductForm editdata={filteredData} sendForm={fd => {
        dispatch(editProductToDatabase(filteredData.id, fd))
        navigate('/dashboard');
        toast.success('Product edit');
      }} />
    </div>
  )
}

export default EditProduct