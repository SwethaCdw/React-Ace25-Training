import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStateContext, useCartDispatchContext } from '../../context/CartContext';
import { useUserContext } from '../../context/UserContext';
import Button from '../../components/button/Button';
import ItemCard from '../../components/item-card/ItemCard';
import './confirmation-screen.css'

const ConfirmationScreen = () => {
    const { user } = useUserContext();
    const cartData = useCartStateContext();
    const setCartData = useCartDispatchContext();
    const navigate = useNavigate();
    useEffect(() => {
        return () => {
            // resetting of values in the cart context
            setCartData([]);
        }
    }, []);
    const handleClick = () => {
        navigate('/');
    };
    return (
        <section className="order-confirmation-wrapper">
            <h2 className="confirmation-header">Order Confirmation</h2>
            <p className="confirmation-text">
                Thank you{user && <span> {user}</span>}, for shopping with us. The items will be delivered within 7 days.
            </p>
            <div className="order-list">
                {/* Mapping over the cart data in the cart context */}
                {cartData.map((productData, index) => <ItemCard key={index} cardData={productData} isOrderCard={true} />)}
            </div>
            <Button handleClick={handleClick}>Return Home</Button>
        </section>
    )
}

export default ConfirmationScreen;