import styles from "./card.module.css"
import { CARD } from "../../constants";
import { useContext } from "react";
import CartContext from "../../context/context";

const Card = ({name, price, imageURL, description, gurantee, quantity, setIsCartEmpty, isPurchase = true}) => {

    const {cart, setCart} = useContext(CartContext);

    const handleClick = () =>{
    const existingIndex = cart.findIndex(
      item => item.name === name && item.price === price
    );


    if (existingIndex !== -1) {
      // Item exists, increase quantity
      const updatedCart = [...cart];
      updatedCart[existingIndex] = {
        ...updatedCart[existingIndex],
        quantity: updatedCart[existingIndex].quantity + 1,
      };
      setCart(updatedCart);
    } else {
      // Item doesn't exist, add new item
      const newItem = { name, price, imageURL, description, quantity: 1 };
      setCart([...cart, newItem]);
    }
    setIsCartEmpty(false);
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
                {!isPurchase && <p>{CARD.QUANTITY(quantity)}</p>}
                <p className={styles.card_description}>{description}</p>
                {gurantee && <div className={styles.guarantee_info}>
                    <img className={styles.guarantee_image} src={CARD.GURANTEE.LOGO.URL} alt={CARD.GURANTEE.LOGO.NAME} />
                    <p className={styles.card_gurantee}>{CARD.GURANTEE.TEXT(gurantee)}</p>
                </div>}
                {isPurchase && <><hr className={styles.horizontal_line}/>
                <button className={styles.card_button} onClick={handleClick}>{CARD.BUTTON}</button></>}
            </div>
        </div>
    )
}

export default Card;