import { useNavigate } from "react-router";
import styles from "./Card.module.css";


const Card = ({place,city,description}) => {
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate(`/details/${city}`)
    }
    

    return(
        <div className={styles.card}>
            <div className={styles.image_wrapper}>
                <img src={`../src/assets/images/${city}.png`} alt={city} />
            </div>
            <div className={styles.card_content}>
                <h4 className={styles.card_heading}>{place}</h4>
                <p className={styles.card_subheading}>{city}</p>
                <p className={styles.card_description}>{description}</p>
                <button className={styles.card_button} onClick={handleClick}>READ MORE</button>
            </div>
        </div>
    )
}

export default Card;