import Header from "../../components/header/header";
import CardsContainer from "../../containers/cardsContainer";
import MyCart from "../../components/myCart/MyCart";
import styles from "../shoppingScreen/shoppingScreen.module.css"
import { useContext, useEffect } from "react";
import CartContext from "../../context/context";

const ShoppingScreen = () => {
    const {isCartEmpty} = useContext(CartContext);

    
    return(
        <>
            <Header />
            <main className={styles.shopping_screen_main_section}>
                    <CardsContainer />
                    {(!isCartEmpty)?<MyCart/>:""}
            </main>
        </>
    )
}

export default ShoppingScreen;