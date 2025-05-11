import { useCartDispatchContext } from '../../context/CartContext';
import './cart-item-card.css'

const CartItemCard = ({ productData }) => {
    const setCartData = useCartDispatchContext();
    const { id, name, photo, quantity, price } = productData;

    const handleIncrement = () => {
        setCartData((prevCart) => {
            const updatedCart = prevCart.map((prod) => prod.id == id ? { ...prod, quantity: prod.quantity + 1 } : prod);
            return updatedCart;
        });
    };

    const handleDecrement = () => {
        setCartData((prevCart) => {
            const updatedCart = prevCart
                .map((prod) => prod.id == id ? { ...prod, quantity: prod.quantity - 1 } : prod)
                .filter((prod) => prod.quantity > 0); // removing from the list if the quantity falls to 0
            return updatedCart;
        });
    };

    return (
        <div className="item-card">
            <div className="item-image-wrapper">
                <img src={photo} alt={name} />
            </div>
            <div className="order-details">
                <p className='order-name'>{name}</p>
                <p className='order-price'>
                    <span className="rupee">₹ </span>{new Intl.NumberFormat('en-IN').format(quantity * price)}
                </p>
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