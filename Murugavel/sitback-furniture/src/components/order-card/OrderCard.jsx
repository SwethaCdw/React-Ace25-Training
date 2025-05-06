import './order-card.css'

const OrderCard = ({ productData }) => {
    const { name, photo, price, description, quantity } = productData;
    return (
        <div className="itemCard">
            <div className="itemCard-image-wrapper">
                <img className='item-image' src={photo} alt={name} />
            </div>
            <div className="product-details">
                <p className="product-name">{name}</p>
                <p className="product-price"><span className="rupee">₹ </span>{price}</p>
            </div>
            <p className="order-quantity-text">Quantity: {quantity}</p>
            <p className="product-description">{description}</p>
        </div>
    )
}

export default OrderCard;