import { useNavigate } from 'react-router-dom';
import { useCartStateContext, useCartDispatchContext } from '../../context/CartContext';
import { useUserContext } from '../../context/UserContext';
import Button from '../../components/button/Button';
import OrderCard from '../../components/order-card/OrderCard';
import './confirmation-screen.css'

const ConfirmationScreen = () => {
    const { user } = useUserContext();
    const cartData = useCartStateContext();
    const setCartData = useCartDispatchContext();
    const navigate = useNavigate();
    const handleClick = () => {
        setCartData({ cartItems: [], totalAmount: 0 }); // resetting of values in the cart context
        navigate('/');
    }
    return (
        <section className="order-confirmation-wrapper">
            <h2 className="confirmation-header">Order Confirmation</h2>
            <p className="confirmation-text">
                Thank you{user && <span> {user}</span>}, for shopping with us. The items will be delivered within 7 days.
            </p>
            <div className="order-list">
                {/* Mapping over the cart data in the cart context */}
                {cartData.cartItems.map((productData, index) => <OrderCard key={index} productData={productData} />)}
            </div>
            <Button handleClick={handleClick}>Return Home</Button>
        </section>
    )
}

export default ConfirmationScreen;