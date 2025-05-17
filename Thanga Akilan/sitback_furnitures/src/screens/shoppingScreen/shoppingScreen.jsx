import Header from "../../components/header/header";
import CardsContainer from "../../containers/cardsContainer/cardsContainer";
import MyCart from "../../components/myCart/MyCart";
import styles from "../shoppingScreen/shoppingScreen.module.css"
import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { PacmanLoader } from "react-spinners";


const ShoppingScreen = () => {
    const {isCartEmpty} = useContext(CartContext);
    const [isLoading, setIsLoading] = useState(true);

    return(
        <>
            <Header />
            <main className={styles.shopping_screen_main_section}>
                    {isLoading && <PacmanLoader size={80} enabled={isLoading.toString()} style={{position:"fixed", top:"50%", right:"50%" }}/>}
                    <>
                        <CardsContainer setIsLoading={setIsLoading}/> 
                        {(!isLoading && !isCartEmpty)?<MyCart/>:""}
                    </>
            </main>
        </>
    )
}

export default ShoppingScreen;