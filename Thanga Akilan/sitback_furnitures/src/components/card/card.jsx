import styles from "./card.module.css"
import { CARD } from "../../constants/CardConstants.js";
import Button from "../button/button";
import { displayPriceInINR as PRICE } from "../../utils/common.util.js"

const Card = ({name, price, imageURL, description, gurantee, quantity, isPurchase = true, handleClick}) => (
        <div className={styles.card}>
            <div className={styles.image_wrapper}>
                <img className={styles.image} src={imageURL} alt={name}/>
            </div>
            <div className={styles.card_content}>
                <div className={styles.card_main_info}>
                    <h3 className={styles.card_name}>{name}</h3>
                    <p className={styles.card_price}>{PRICE(price)}</p>
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
);

export default Card;