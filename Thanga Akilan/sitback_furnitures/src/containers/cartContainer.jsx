import Cart from "../components/cart/cart";
import { useContext, useEffect } from "react";
import CartContext from "../context/context";
import styles from "../screens/shoppingScreen/shoppingScreen.module.css"


const CartContainer = () => {
    const {cart} = useContext(CartContext);
    console.log(cart)
  
    return (
      <div className={styles.cart_container}>
        {cart.length > 0 ? (
          cart.map((item) => (
            <Cart
              key={item.name}
              name={item.name}
              price={item.price}
              imageURL={item.imageURL}
              initialQuantity={item.quantity}
            />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    );
  };


  export default CartContainer;
  