import Cart from "../components/cart/Cart";
import { useContext } from "react";
import CartContext from "../context/context";
import styles from "../screens/shoppingScreen/shoppingScreen.module.css"


const CartContainer = () => {
    const {cart} = useContext(CartContext);
  
    return (
      <div className={styles.cart_container}>
        {cart.length > 0 ? (
          cart.map((item) => (
            <Cart
              key={item.name} // assuming name is unique
              name={item.name}
              price={item.price}
              imageURL={item.imageURL}
            />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    );
  };


  export default CartContainer;
  