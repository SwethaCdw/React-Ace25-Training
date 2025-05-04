import { useCallback } from 'react';
import './item-card.css'
import Button from '../button/Button';

const ItemCard = ({ cardData }) => {
    const { name, photo, guarantee, price, description } = cardData;
    const handleClick = useCallback(((event) => {

    }), [name, photo, guarantee, price, description]);
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
            <Button>ADD TO CART</Button>
        </div>
    )
}

export default ItemCard;