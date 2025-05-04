import { useCartContext } from '../../context/CartContext';
import CartItemCard from '../cart-item-card/CartItemCard';
import './cart-list.css'

const CartList = () => {
    const {cartData} = useCartContext();
    return (
        <div className='cart-item-list'>
            {cartData.map((orderData) => <CartItemCard productData={orderData} />)}
        </div>
    )
}

export default CartList;