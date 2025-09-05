import styles from "./Cart.module.css"
import { displayPriceInINR as PRICE } from "../../utils/common.util.js"




const Cart =({  name, price, imageURL, quantity, handleDecrease, handleIncrease}) => (
        <div className={styles.cart}>
            <div className={styles.cart_image_wrapper}>
                <img className={styles.cart_image} src={imageURL} alt={name} />
            </div>
            <div className={styles.cart_info}>
                <p className={styles.cart_name}>{name}</p>
                <p className={styles.cart_price}>{PRICE(price)}</p>
            </div>
            <div className={styles.cart_quantity}>
                <button className={styles.cart_quantity_incrementor} onClick={handleDecrease}>-</button>
                <p className={styles.cart_quantity_value}>{quantity}</p>
                <button className={styles.cart_quantity_incrementor} onClick={handleIncrease}>+</button>
            </div>
        </div>
)

export default Cart;