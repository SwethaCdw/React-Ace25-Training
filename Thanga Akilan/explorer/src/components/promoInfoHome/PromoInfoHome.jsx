import styles from "../../pages/home/Home.module.css";
import { useState } from "react";
import { useNavigate } from "react-router"
import { PROMO_CONTAINER_HOME as CONSTANTS } from "../../contants";
import SelectElement from "../selectElement/SelectElement";

const PromoInfoHome = ({placeData}) => {
    const [explore, setExplore] = useState('');
    const navigate = useNavigate();
  
    const handleExplore = () => {
      if(explore !== null){
        navigate(`/details/${explore}`);
      }
    }
    return(
        <div  className={styles.promo_section_content}>
            <h2 className={styles.promo_heading}>{CONSTANTS.HEADING}</h2>
            <h3 className={styles.promo_subheading}>{CONSTANTS.SUBHEADING}<span  className={styles.promo_subheading_highlight}>{CONSTANTS.SUBHEADING_HIGHLIGHT}</span></h3>
            <SelectElement className={styles.promo_select_element} placeData={placeData} setPlace={setExplore}/>
            <button className={styles.explore_button} onClick={handleExplore}>{CONSTANTS.BUTTON_TEXT}</button>
        </div>
    )
}

export default PromoInfoHome;