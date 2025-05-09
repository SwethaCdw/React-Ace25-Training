import { useNavigate } from "react-router-dom";
import { CARTDETAILS } from "../../constants";
import Button from "../../components/button/Button";
import CartItemCard from "../../components/cart-item-card/CartItemCard";
import './cart-details-container.css'
import { useCallback } from "react";

const CartDetailsContainer = ({cartData}) => {
    const navigate = useNavigate();
    const handleClick = useCallback(() => {
        navigate('/confirmOrder');
    }, []);
    const totalAmount = cartData.reduce((accumulator, currentValue) => 
        accumulator + (parseFloat(currentValue.quantity) * parseFloat(currentValue.price))
        , 0);
    return (
        <>
            <div className='cart-item-list'>
                {/* Mapping over the items in the cartItems array */}
                {cartData.map((orderData, index) => <CartItemCard key={index} productData={orderData} />)}
            </div>
            <div className="amount-banner">
                <div className="amount-details">
                    <p className='amount-text'>{CARTDETAILS.AMOUNT}</p>
                    <p><span className="rupee">₹ </span> {new Intl.NumberFormat('en-IN').format(totalAmount)}</p>
                </div>
            <Button handleClick={handleClick}>{CARTDETAILS.ORDER}</Button>
            </div>
        </>
    )
}

export default CartDetailsContainer;