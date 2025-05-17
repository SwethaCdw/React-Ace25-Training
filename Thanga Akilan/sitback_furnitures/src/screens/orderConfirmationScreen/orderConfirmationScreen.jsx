import Header from "../../components/header/header"
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";
import Card from "../../components/card/card";
import styles from "./orderConfirmationScreen.module.css";
import { ORDER_CONFIRMATION_SCREEN as CONSTANTS } from "../../constants/OrderConfirmationConstants";
import { LOCAL_STORAGE } from "../../constants/localStorageConstants";

const OrderConfirmationScreen = () => {
    const { cart } = useContext(CartContext)
    const [user, setUser] = useState(()=>{
      const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE.USER.NAME));
      return (userData ? userData.userName : "");
    })

    useEffect(()=>{
      localStorage.removeItem(LOCAL_STORAGE.CART.NAME);
    },[])


    const CardsOrdered = cart.length!==0 && cart.map((item) => (
      <Card
        key={item.name}
        name={item.name}
        price={item.price}
        description={item.description}
        quantity={item.quantity}
        imageURL={item.imageURL}
        isPurchase={false}
      />
    ))
    

    return(
        <>
        <Header />
        <main className={styles.orderComfirmation_main_section}>
            <h2 className={styles.orderConfirmation_heading}>{CONSTANTS.HEADING}</h2>
            <p className={styles.orderConfirmation_message}>{CONSTANTS.MESSAGE(user)}</p>
            <div className={styles.cart_items_container}>
            {CardsOrdered}
        </div>
        </main>
        </>
    )
}

export default OrderConfirmationScreen;