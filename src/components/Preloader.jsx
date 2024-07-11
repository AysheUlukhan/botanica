import React from 'react'
import bee from '../assets/images/bee.webp'

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="spinner"></div>
      <p>Yüklənir...</p>
      <img src={bee} alt="" />
    </div>
  )
}

export default Preloader