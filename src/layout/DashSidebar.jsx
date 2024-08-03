import React, { useState } from 'react'
import { FaBars, FaTh, FaUserAlt } from "react-icons/fa"
import { NavLink } from 'react-router-dom';
const DashSidebar = () => {

    const menuItem = [
        {
            path: "/dashboard",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/dashboard/users",
            name: "Users",
            icon: <FaUserAlt />
        },
    ]
    return (
        <div   className='dash_sidebar'>
            <div className="sidebar">
                <div className="top_section">
                    <h5 className='dash_logo'>Dashboard</h5>
                    <div  className="bars">
                        <FaBars/>
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassname="active">
                            <div className='icon'>{item.icon}</div>
                            <p  className="link-text">{item.name}</p>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}

export default DashSidebar