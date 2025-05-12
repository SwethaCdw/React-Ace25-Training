import Header from "../../components/header/header"
import { useContext } from "react";
import CartContext from "../../context/context";
import Card from "../../components/card/card";
import styles from "./orderConfirmationScreen.module.css";
import { ORDER_CONFIRMATION_SCREEN as CONSTANTS } from "../../constants";

const OrderConfirmationScreen = () => {
    const { cart } = useContext(CartContext)
    

    return(
        <>
        <Header />
        <main className={styles.orderComfirmation_main_section}>
            <h2 className={styles.orderConfirmation_heading}>{CONSTANTS.HEADING}</h2>
            <p className={styles.orderConfirmation_message}>{CONSTANTS.MESSAGE()}</p>
            <div className={styles.cart_items_container}>
          {cart.map((item) => (
            <Card
              key={item.name}
              name={item.name}
              price={item.price}
              description={item.description}
              quantity={item.quantity}
              imageURL={item.imageURL}
              isPurchase={false}
            />
          ))}
        </div>
        </main>
        </>
    )
}

export default OrderConfirmationScreen;