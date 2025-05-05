import { useState } from 'react';
import CartItemCard from '../../components/cart-item-card/CartItemCard';
import { useCartContext } from '../../context/CartContext';
import './cart-container.css'
import Button from '../../components/button/Button';

const CartContainer = () => {
    const {cartData} = useCartContext();
    return (
        <div className="cart-container">
            <h2 className="cart-text">MY CART</h2>
            <div className='cart-item-list'>
                {cartData.cartItems.map((orderData, index) => <CartItemCard key={index} productData={orderData} />)}
            </div>
            <div className="amount-banner">
                <div className="amount-details">
                    <p className='amount-text'>TOTAL AMOUNT</p>
                    <p><span className="rupee">₹ </span> {cartData.totalAmount}</p>
                </div>
                <Button>PLACE ORDER</Button>
            </div>
        </div>
    )
}

export default CartContainer;