import React from 'react';
import { FaBars, FaTh, FaUserAlt } from "react-icons/fa"
import { Link, NavLink } from 'react-router-dom';
import DashSidebar from '../layout/DashSidebar';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductToDatabase } from '../redux/actions/shopAction';
import slugify from 'react-slugify';
const Dashboard = () => {
    const data = useSelector(p => p);
    const dispatch = useDispatch();
    return (
        <div className='d-flex'>
            <DashSidebar />
            <div className='dashboard'>
                <div className='d-flex align-items-center justify-content-center flex-column mt-5'>
                    <div>
                        <h4>Dashboard</h4>
                    </div>
                    <div className="container mt-3">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-10">
                                <div className='add-btn my-3'>
                                    <Link to="/dashboard/add">Add</Link>
                                </div>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Front Img</th>
                                            <th scope="col">Back Img</th>
                                            <th scope="col">Title</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Stock</th>
                                            <th scope="col">Edit</th>
                                            <th scope="col">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data?.map((item, index) => (

                                            <tr>
                                                <th scope="row">{index + 1}</th>
                                                <td><img className='table_fimg' src={item.frontImg} alt={item.title} /></td>
                                                <td><img className='table_bimg' src={item.backImg} alt={item.title} /></td>
                                                <td>{item.title}</td>
                                                <td>{item.category}</td>
                                                <td>${item.price}</td>
                                                <td>{item.stock}</td>
                                                <td><Link className='btn-edit' to={`/dashboard/edit/${slugify(item.title)}`} >Edit</Link></td>
                                                <td><button className='btn-delete' onClick={() => { dispatch(deleteProductToDatabase(item.id)) }}>Delete</button></td>
                                            </tr>
                                        ))
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard