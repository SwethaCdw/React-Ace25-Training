import styles from "../pages/home/Home.module.css";
import Card from "../components/card/Card";
import { CARDS_CONTAINER as CONSTANTS } from "../contants";

const CardsContainer = ({placeData})=>{
    return(
        <>
        <section className={styles.destinations_section}>
        <h2 className={styles.destinations_section_heading}>{CONSTANTS.HEADING}</h2>
        <h3 className={styles.destinations_section_subheading}>{CONSTANTS.SUBHEADING}</h3>
        <div className={styles.destinations_container}>
            {placeData.map((place,index)=>
            <Card key={place.city} place={place.place} city={place.city} description={place.shortDescription}/>)}
        </div>
      </section>
        </>
    )
}


export default CardsContainer;