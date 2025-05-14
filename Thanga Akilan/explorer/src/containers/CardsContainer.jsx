import Card from "../components/card/Card";

const CardsContainer = ({heading, subheading, placeData, styles})=>{
    return(
        <>
        <section className={`${styles.destinations_section} ${styles.similar_destinations_section}`}>
        <h2 className={`${styles.destinations_section_heading} ${styles.similar_destinations_heading}`}>{heading}</h2>
        <h3 className={`${styles.destinations_section_subheading} ${styles.similar_destinations_subheading}`}>{subheading}</h3>
        <div className={`${styles.destinations_container} ${styles.similar_destinations_container}`}>
            {placeData.map((place,index)=>
            <Card key={place.city} {...place}/>)}
        </div>
      </section>
        </>
    )
}


export default CardsContainer;