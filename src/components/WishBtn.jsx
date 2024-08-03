import React from 'react'
import { IoHeartSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useWishlist } from 'react-use-wishlist'

const WishBtn = ({ myWishlist }) => {
    const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();

    const toggleFunc = (product) => {
        if (localStorage.getItem('login') === 'true') {
            if (inWishlist(product.id)) {
                removeWishlistItem(product.id)
                toast.warning('Favorilərdən silindi')
            } else {
                addWishlistItem(product)
                toast.success('Favorilərə əlavə olundu')
            }
        } else {
            toast.error('İlk öncə giriş etməlisiniz!');
        }
    }

    return (
        <Link onClick={() => {
            if (localStorage.getItem('login') === 'true') {
                toggleFunc(myWishlist);
            } else {
                toast.error('İlk öncə giriş etməlisiniz!');
            }
        }}>
            <IoHeartSharp className={localStorage.getItem('login') === 'true' ? (inWishlist(myWishlist.id) ? 'wishlist-full' : 'wishlist') : 'wishlist'} />
        </Link>
    )
}

export default WishBtn;
