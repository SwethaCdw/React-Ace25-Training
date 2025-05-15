import styles from "./card.module.css"
import { CARD } from "../../constants";
import { useContext } from "react";
import CartContext from "../../context/context";
import Button from "../button/button";

const Card = ({name, price, imageURL, description, gurantee, quantity, isPurchase = true}) => {
    const {cart, setCart} = useContext(CartContext);

    // Add to cart
    const handleClick = () =>{
    const existingIndex = cart.findIndex(
      item => item.name === name && item.price === price
    );
    if (existingIndex == -1) {
      const newItem = { name, price, imageURL, description, quantity: 1 };
      setCart([...cart, newItem]);
    }else{
        const updatedCart = cart.map((item, index) =>
        index === existingIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
        console.log("hello : ", cart);
    }
  };
    return(
        <div className={styles.card}>
            <div className={styles.image_wrapper}>
                <img className={styles.image} src={imageURL} alt={name}/>
            </div>
            <div className={styles.card_content}>
                <div className={styles.card_main_info}>
                    <h3 className={styles.card_name}>{name}</h3>
                    <p className={styles.card_price}>{CARD.PRICE(price)}</p>
                </div>
                {!isPurchase && <p className={styles.card_quantity}>{CARD.QUANTITY(quantity)}</p>}
                <p className={styles.card_description}>{description}</p>
                {gurantee && 
                        <div className={styles.guarantee_info}>
                            <img className={styles.guarantee_image} src={CARD.GURANTEE.LOGO.URL} alt={CARD.GURANTEE.LOGO.NAME} />
                            <p className={styles.card_gurantee}>{CARD.GURANTEE.TEXT(gurantee)}</p>
                        </div>}
                {isPurchase && <><hr className={styles.horizontal_line}/>
                <Button className={styles.card_button} onClick={handleClick}>{CARD.BUTTON}</Button></>}
            </div>
        </div>
    )
}

export default Card;