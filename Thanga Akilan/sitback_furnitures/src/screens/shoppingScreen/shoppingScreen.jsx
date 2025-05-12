import Header from "../../components/header/header";
import CardsContainer from "../../containers/cardsContainer";
import MyCart from "../../components/myCart/MyCart";
import styles from "../shoppingScreen/shoppingScreen.module.css"
import { useEffect, useState } from "react";

const ShoppingScreen = ({setIsCartEmpty, isCartEmpty}) => {
    
    return(
        <>
            <Header />
            <main className={styles.shopping_screen_main_section}>
                    <CardsContainer setIsCartEmpty={setIsCartEmpty}/>
                    {(!isCartEmpty)?<MyCart/>:""}
            </main>
        </>
    )
}

export default ShoppingScreen;