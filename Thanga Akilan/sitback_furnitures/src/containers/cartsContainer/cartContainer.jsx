import { useContext } from "react";
import { CartContext } from "../../context/cartContext.jsx";
import styles from "../../screens/shoppingScreen/shoppingScreen.module.css"
import { CARTS_CONTAINER as CONSTANTS } from "../../constants/CartsContainerConstants.js";
import CartItemContainer from "../../components/cartItemContainer/cartItemContainer.jsx";


const CartContainer = () => {
    const {cart} = useContext(CartContext);
    
  
    const CartElements = cart.length !== 0 ? (cart.map((item) => (
      <CartItemContainer
        key={item.name}
        data={item}
      />
    ))
        ) : (
          <p>{CONSTANTS.EMPTY_STATUS}</p>
        )

    return (
      <div className={styles.cart_container}>
          {CartElements}
      </div>
    );
  };


  export default CartContainer;
  