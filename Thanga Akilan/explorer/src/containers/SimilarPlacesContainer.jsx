import styles from "../pages/details/Details.module.css";
import Card from "../components/card/Card";
import { SIMILAR_PLACES_CONTAINER as CONSTANTS } from "../contants";


const SimilarPlacesContainer = ({similarDestinations, city}) => {
    return (
        <>
            <section className={styles.similar_destinations_section}>
                <h4 className={styles.similar_destinations_heading}>{CONSTANTS.HEADING}</h4>
                <p className={styles.similar_destinations_subheading}>{CONSTANTS.SUBHEADING + city}</p>
                <div className={styles.similar_destinations_container}>
                    {(similarDestinations).map((place)=>{
                        return <Card key={place.city} place={place.place} city={place.city} description={place.shortDescription} />
                    })}
                </div>
            </section>
        </>
    )
}

export default SimilarPlacesContainer;