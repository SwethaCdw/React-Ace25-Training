import CartList from '../../components/cart-list/CartList';
import './cart-container.css'

const CartContainer = () => {
    return (
        <div className="cart-container">
            <h2 className="cart-text">MY CART</h2>
            <CartList />
        </div>
    )
}

export default CartContainer;