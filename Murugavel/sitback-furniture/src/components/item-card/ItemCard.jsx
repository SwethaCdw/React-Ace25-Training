import { memo, useCallback } from 'react';
import { useCartDispatchContext } from '../../context/CartContext';
import { ITEMCARD } from '../../constants';
import equal from 'fast-deep-equal';
import Button from '../button/Button';
import './item-card.css'

const ItemCard = ({ cardData, isOrderCard }) => {
    const { id, name, photo, price, description } = cardData;
    const setCartData = !isOrderCard ? useCartDispatchContext() : null;
    
    const handleClick = !isOrderCard ? useCallback(() => {
        setCartData((prevCart) => {
            const itemIndex = prevCart.findIndex((cartItem) => cartItem.id == id);
            if (itemIndex == -1) { // if item is not already present in the cart items
                return [...prevCart, { id, name, photo, price, description, quantity: 1 }];
            }
            return [...prevCart]; // returning new reference of previous cart when the item is already present in the list
        })
    }, []) : null;

    return (
        <div className="itemCard">
            <div className="itemCard-image-wrapper">
                <img className='item-image' src={photo} alt={name} />
            </div>
            <div className="product-details">
                <p className="product-name">{name}</p>
                <p className="product-price">
                    <span className="rupee">₹ </span>{new Intl.NumberFormat('en-IN').format(price)}
                </p>
            </div>
            {isOrderCard && <p className="order-quantity-text">{ITEMCARD.QUANTITY}: {cardData.quantity}</p>}
            <p className="product-description">{description}</p>
            {!isOrderCard && <><div className="guarantee-details">
                <div className="shield-check-wrapper">
                    <img src="../src/assets/images/shield-check.png" alt="Guarantee icon" />
                </div>
                <p className="guarantee-text">{cardData.guarantee} {ITEMCARD.YEAR}{cardData.guarantee > 1 && 'S'} {ITEMCARD.GUARANTEE}</p>
            </div>
            <hr className='divider' />
            <Button handleClick={handleClick}>{ITEMCARD.BUTTON}</Button></>}
        </div>
    )
}

export default memo(ItemCard, (prevProps, nextProps) => equal(prevProps.cardData, nextProps.cardData)); // memoizing the item card