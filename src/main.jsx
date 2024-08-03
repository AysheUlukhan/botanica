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
import shopStore from './redux/store/shopStore.js';
import { GetProduct } from './redux/actions/shopAction.js';
import { Provider } from 'react-redux';
import supabase from './config/connectdb.js';


const store = shopStore();

const fetchData = async () => {
  const { data, error } = await supabase.from('product').select()

  store.dispatch(GetProduct(data));
}
fetchData();


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ModeProvider>
      <CartProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </CartProvider>
    </ModeProvider>
  </Provider>
)

