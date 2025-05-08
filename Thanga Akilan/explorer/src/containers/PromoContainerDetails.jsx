import styles from "../pages/details/Details.module.css";
import PromoImage from "../components/promoImage/PromoImage";
import { useEffect, useState } from "react";
import { PROMO_CONTAINER_DETAILS as CONSTANTS } from "../contants";



const PromoContainerDetails = ({placeInfo}) => {
    const [temperature, setTemperature] = useState('');

    useEffect(()=>{
        const fetchtemperature = async () => {
            const response = await fetch('http://api.weatherapi.com/v1/current.json?key=eb67c9df742b48b3a0742908250805&q=thanjavur&aqi=no');
            const value = await response.json();
            const temperature = await value.current.temp_c + CONSTANTS.TEMPERATURE_UNIT;
            setTemperature(temperature);
        }

        fetchtemperature();

    },[]);


    return(
        <>
            <section className={styles.promo_section}>
                <div className={styles.promo_section_content}>
                    <h2 className={styles.promo_city}>{placeInfo.city}</h2>
                    <h3 className={styles.promo_description}>{placeInfo.place}</h3>
                    <p className={styles.promo_temperature}>{temperature}</p>
                </div>
                <PromoImage image={placeInfo.city}/>
            </section>
        </>
    )
}

export default PromoContainerDetails;