import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = ({ items }) => {
    return (
        <nav className='bread_crumb' aria-label="breadcrumb">
            <ol className="breadcrumb d-flex justify-content-center align-items-center">
                {items.map((item, index) => (
                    <li key={index} className="breadcrumb-item">
                        {index === items.length - 1 ? (
                            <Link className="breadcrumb-text">{item.text}</Link>
                        ) : (
                            <a href={item.link} className="breadcrumb-link">
                                {item.text}
                            </a>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}

export default BreadCrumb