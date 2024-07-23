import React from 'react'
import { IoHeartSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useWishlist } from 'react-use-wishlist'

const WishBtn = ({ myWishlist }) => {
    const { addWishlistItem, removeWishlistItem, inWishlist } = useWishlist();

    const toggleFunc = (product) => {
        if (inWishlist(product.id)) {
            removeWishlistItem(product.id)
            toast.warning('Favorilərdən silindi')
        } else {
            addWishlistItem(product)
            toast.success('Favorilərə əlavə olundu')
        }
    }
    return (
        <Link onClick={()=>toggleFunc(myWishlist)}>
            {
                inWishlist(myWishlist.id) ? <IoHeartSharp className='wishlist-full' />  : <IoHeartSharp className='wishlist' />
            }
           
            </Link>
    )
}

export default WishBtn