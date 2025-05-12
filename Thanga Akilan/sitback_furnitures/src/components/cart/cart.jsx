import styles from "./Cart.module.css"
import { useState, useEffect } from "react";
import { CART } from "../../constants";


const Cart =({ id, name, price, imageURL, quantity: initialQuantity=1 }) => {
    const [quantity, setQuantity] = useState(initialQuantity);
  
    // Update localStorage when quantity changes
    useEffect(() => {
      const cartData = JSON.parse(localStorage.getItem('cart')) || {};
      if (cartData[id]) {
        cartData[id].quantity = quantity;
        localStorage.setItem('cart', JSON.stringify(cartData));
      }
    }, [quantity, id]);
  
    const handleIncrease = () => {
      setQuantity(prev => prev + 1);
    };
  
    const handleDecrease = () => {
      setQuantity(prev => (prev > 1 ? prev - 1 : 1)); // Prevent going below 1
    };

    return(
        <div className={styles.cart}>
            <div className={styles.cart_image_wrapper}>
                <img className={styles.cart_image} src={imageURL} alt={name} />
            </div>
            <div className={styles.cart_info}>
                <p className={styles.cart_name}>{name}</p>
                <p className={styles.cart_price}>{CART.PRICE(price)}</p>
            </div>
            <div className={styles.cart_quantity}>
                <button className={styles.cart_quantity_incrementor} onClick={handleDecrease}>-</button>
                <p className={styles.cart_quantity_value}>{quantity}</p>
                <button className={styles.cart_quantity_incrementor} onClick={handleIncrease}>+</button>
            </div>
        </div>
    )
}

export default Cart;