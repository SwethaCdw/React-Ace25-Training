import Header from "../../components/header/header";
import CardsContainer from "../../containers/cardsContainer";
import MyCart from "../../components/myCart/MyCart";
import styles from "../shoppingScreen/shoppingScreen.module.css"
import { useContext, useState } from "react";
import CartContext from "../../context/context";
import { PacmanLoader } from "react-spinners";


const ShoppingScreen = () => {
    const {isCartEmpty} = useContext(CartContext);
    const [isLoading, setIsLoading] = useState(true);

    return(
        <>
            <Header />
            <main className={styles.shopping_screen_main_section}>
                    {isLoading && <PacmanLoader />}
                    <>
                        <CardsContainer setIsLoading={setIsLoading}/> 
                        {(!isCartEmpty)?<MyCart/>:""}
                    </>
            </main>
        </>
    )
}

export default ShoppingScreen;