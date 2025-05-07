import { memo, useCallback } from 'react';
import { useCartDispatchContext } from '../../context/CartContext';
import equals from 'fast-deep-equal';
import Button from '../button/Button';
import './item-card.css'

const ItemCard = ({ cardData }) => {
    const { id, name, photo, guarantee, price, description } = cardData;
    const setCartData = useCartDispatchContext();
    const handleClick = useCallback((() => {
        setCartData((prevCart) => {
            const itemIndex = prevCart.cartItems.findIndex((cartItem) => cartItem.id == id);
            if (itemIndex == -1) {
                return {
                    cartItems: [...prevCart.cartItems, { id, name, photo, price, description, quantity: 1 }],
                    totalAmount: parseFloat(prevCart.totalAmount) + parseFloat(price)
                };
            }
            return {...prevCart};
        })
    }), [id, name, photo, price]);
    return (
        <div className="itemCard">
            <div className="itemCard-image-wrapper">
                <img className='item-image' src={photo} alt={name} />
            </div>
            <div className="product-details">
                <p className="product-name">{name}</p>
                <p className="product-price"><span className="rupee">₹ </span>{price}</p>
            </div>
            <p className="product-description">{description}</p>
            <div className="guarantee-details">
                <div className="shield-check-wrapper">
                    <img src="../src/assets/images/shield-check.png" alt="Guarantee icon" />
                </div>
                <p className="guarantee-text">{guarantee} YEAR{guarantee > 1 && 'S'} GUARANTEE</p>
            </div>
            <hr className='divider' />
            <Button handleClick={handleClick}>ADD TO CART</Button>
        </div>
    )
}

export default memo(ItemCard, (prevProps, nextProps) => equals(prevProps.cardData, nextProps.cardData));