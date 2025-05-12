import { useContext } from "react";
import { useNavigate } from "react-router";
import { MYCART } from "../../constants";
import CartContainer from "../../containers/cartContainer";
import styles from "./MyCart.module.css"
import CartContext from "../../context/context";

const MyCart = () => {
    const navigate = useNavigate();

    const {cart} = useContext(CartContext);
    const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );


  const handleClick = () => {
    navigate('/confirmOrder');
  }
    return(
        <aside className={styles.my_cart_section}>
            <div className={styles.my_card_content}>
                <h4 className={styles.my_cart_heading}>{MYCART.HEADING}</h4>
                <CartContainer/>
            </div>
            <div className={styles.my_cart_bottom_pad}>
                <div>
                    <p className={styles.my_cart_total_amount}>{MYCART.INFO_SECTION.TOTAL_AMOUNT.NAME}</p>
                    <p className={styles.my_cart_amount}>{MYCART.INFO_SECTION.TOTAL_AMOUNT.PRICE(totalPrice)}</p>
                </div>
                <button className={styles.cart_buy_button} onClick={handleClick}>{MYCART.INFO_SECTION.BUTTON}</button>
            </div>
        </aside>
    )
}

export default MyCart;