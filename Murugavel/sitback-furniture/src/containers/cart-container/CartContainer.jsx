import CartItemCard from '../../components/cart-item-card/CartItemCard';
import { useCartContext } from '../../context/CartContext';
import './cart-container.css'

const CartContainer = () => {
    const {cartData} = useCartContext();
    return (
        <div className="cart-container">
            <h2 className="cart-text">MY CART</h2>
            <div className='cart-item-list'>
                {cartData.map((orderData) => <CartItemCard productData={orderData} />)}
            </div>
        </div>
    )
}

export default CartContainer;