import CartItemCard from '../../components/cart-item-card/CartItemCard';
import { useCartStateContext } from '../../context/CartContext';
import './cart-container.css'
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';

const CartContainer = () => {
    const cartData = useCartStateContext();
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/confirmOrder');
    }

    if (cartData.cartItems.length === 0) {
        return null;
    }

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
                <Button handleClick={handleClick}>PLACE ORDER</Button>
            </div>
        </div>
    )
}

export default CartContainer;