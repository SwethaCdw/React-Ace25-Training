import { useCartContext } from '../../context/CartContext';
import './cart-item-card.css'

const CartItemCard = ({ productData }) => {
    const { setCartData } = useCartContext();
    const { id, name, photo, quantity, price } = productData;
    
    return (
        <div className="item-card">
            <div className="item-image-wrapper">
                <img src={photo} alt={name} />
            </div>
            <div className="product-details">
                <p className='product-name'>{name}</p>
                <p className='product-price'>{quantity * price}</p>
            </div>
            <div className="quantity-control-wrapper">
                <p>-</p>
                <p>{quantity}</p>
                <p>+</p>
            </div>
        </div>
    )
}

export default CartItemCard;