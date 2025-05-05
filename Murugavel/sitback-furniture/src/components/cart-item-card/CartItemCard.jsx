import { useCallback } from 'react';
import { useCartContext } from '../../context/CartContext';
import './cart-item-card.css'

const CartItemCard = ({ productData }) => {
    const { setCartData } = useCartContext();
    const { id, name, photo, quantity, price } = productData;

    const handleIncrement = useCallback(() => {
        setCartData((prevCart) => {
            const updatedCart = prevCart.cartItems.map((prod) => prod.id == id ? { ...prod, quantity: prod.quantity + 1 } : prod);
            return { cartItems: updatedCart, totalAmount: parseFloat(prevCart.totalAmount) + parseFloat(price) };
        });
    }, [id, price]);

    const handleDecrement = useCallback(() => {
        setCartData((prevCart) => {
            const updatedCart = prevCart.cartItems
                .map((prod) => prod.id == id ? { ...prod, quantity: prod.quantity - 1 } : prod)
                .filter((prod) => prod.quantity > 0);
            return { cartItems: updatedCart, totalAmount: parseFloat(prevCart.totalAmount) - parseFloat(price) };
        });
    }, [id, price]);

    return (
        <div className="item-card">
            <div className="item-image-wrapper">
                <img src={photo} alt={name} />
            </div>
            <div className="order-details">
                <p className='order-name'>{name}</p>
                <p className='order-price'><span className="rupee">₹ </span>{quantity * price}</p>
            </div>
            <div className="quantity-control-wrapper">
                <p className='quantity-control-icon' onClick={handleDecrement}>-</p>
                <p className='quantity-text'>{quantity}</p>
                <p className='quantity-control-icon' onClick={handleIncrement}>+</p>
            </div>
        </div>
    )
}

export default CartItemCard;