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
                    <h1  className='dash_logo'>Dashboard</h1>
                    <div  className="bars">
                        <FaBars/>
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassname="active">
                            <div className='icon'>{item.icon}</div>
                            <div  className="link-text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}

export default DashSidebar