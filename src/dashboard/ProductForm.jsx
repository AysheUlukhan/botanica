import React, { useState } from 'react'
import DashSidebar from '../layout/DashSidebar'
import { toast } from 'react-toastify';

const ProductForm = ({ sendForm, editdata }) => {
    const [frontImg, setFrontImg] = useState(editdata ? editdata.frontImg : "");
    const [backImg, setBackImg] = useState(editdata ? editdata.backImg : "");
    const [title, setTitle] = useState(editdata ? editdata.title : "");
    const [category, setCategory] = useState(editdata ? editdata.category : "");
    const [price, setPrice] = useState(editdata ? editdata.price : "");
    const [stock, setStock] = useState(editdata ? editdata.stock : "");

    const formSubmited = (e) => {
        e.preventDefault();
        if (!frontImg || !backImg || !title || !category || !price || !stock) {
            toast.warning('Please fill input');
        } else {
            sendForm({
                frontImg,
                backImg,
                title,
                category,
                price,
                stock
            })
        }
    }

    return (
        <div className='d-flex product_form'>
            <DashSidebar />
            <div className='container mt-5'>
                <h5 className='text-center'>{editdata ? "Edit Product" : "Add Product"}</h5>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                        <form onSubmit={formSubmited}>
                            <div className="col-lg-12 ">
                                <div className='input-data'>
                                    <label htmlFor="">Front Img</label>
                                    <input
                                        value={frontImg}
                                        onChange={e => setFrontImg(e.target.value)}
                                        type="text" />
                                </div>
                            </div>

                            <div className="col-lg-12 pt-3 input-data">
                                <label htmlFor="">Back Img</label>
                                <input
                                    value={backImg}
                                    onChange={e => setBackImg(e.target.value)}
                                    type="text" />
                            </div>

                            <div className="col-lg-12 pt-3 input-data">
                                <label htmlFor="">Title</label>
                                <input
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                    type="text" />
                            </div>

                            <div className="col-lg-12 pt-3 input-data">
                                <label htmlFor="">Category</label>
                                <input
                                    value={category}
                                    onChange={e => setCategory(e.target.value)}
                                    type="text" />
                            </div>

                            <div className="col-lg-12 pt-3 input-data">
                                <label htmlFor="">Price</label>
                                <input
                                    value={price}
                                    onChange={e => setPrice(e.target.value)}
                                    type="text" />
                            </div>

                            <div className="col-lg-12 pt-3 input-data">
                                <label htmlFor="">Stock</label>
                                <input
                                    value={stock}
                                    onChange={e => setStock(e.target.value)}
                                    type="text" />
                            </div>

                            <div className='d-flex justify-content-end'>
                                <button>{editdata ? "Edit" : "Add"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductForm