import styles from "./Cart.module.css"
import { useState, useEffect, useContext } from "react";
import { CART } from "../../constants";
import CartContext from "../../context/context";




const Cart =({  name, price, imageURL}) => {
  const {cart, setCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(()=>{
      const expectedIndex = cart.findIndex(item => (item.name==name && item.price==price));
      return ((expectedIndex!=-1) ? cart[expectedIndex].quantity : 1 );
    });


  
    useEffect(() => {
      const cartData = JSON.parse(localStorage.getItem('cart')) || [];
      const existingIndex = cart.findIndex(
        item => item.name === name && item.price === price
      );
      if (existingIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingIndex] = {
          ...updatedCart[existingIndex],
          quantity: quantity,
        };
        setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(cartData));}
    }, [quantity]);


  
    const handleIncrease = () => {
      setQuantity(prev => prev+1);
    };
  
    const handleDecrease = () => {
      if(quantity>0){
      setQuantity(prev => prev-1)
      }
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