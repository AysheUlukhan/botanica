import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import "./assets/scss/style.scss";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { WishlistProvider } from 'react-use-wishlist';
import { CartProvider } from 'react-use-cart';
import { ModeProvider } from './context/ModeContext.jsx';
import './i18n/i18next.jsx'
const normalu = {
  email: "ayse@gmail.com",
  password: "ayse123"
}

const normalud = JSON.stringify(normalu)

const setNormalUser = () =>{
  localStorage.setItem('userdata',normalud)
}

setNormalUser();

ReactDOM.createRoot(document.getElementById('root')).render(
    <ModeProvider>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </ModeProvider>
)

