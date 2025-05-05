
import TitleBar from '../components/titlebar/Titlebar'
import styles from './Home.module.css'
import Card from '../components/card/Card'
import SelectElement from '../components/selectElement/SelectElement'
import PromoImage from '../components/promoImage/PromoImage'
import ContactForm from '../components/contactForm/ContactForm'

const Home = ({placeData}) => {
    return(
        <>
        <TitleBar />
        <main>
          <section className={styles.promo_section}>
            <div  className={styles.promo_section_content}>
                <h2 className={styles.promo_heading}>WELCOME TO EXPLORER</h2>
                <h3 className={styles.promo_subheading}>Your Adventure Travel Expert in the <span>SOUTH</span></h3>
                <SelectElement placeData={placeData} />
                <button className={styles.explore_button}>EXPLORE</button>
            </div>
            <PromoImage image={"cover"} />
          </section>
          <section className={styles.destinations_section}>
            <h2 className={styles.destinations_section_heading}> Destinations</h2>
            <h3 className={styles.destinations_section_subheading}>Just for you. Because you and your bike are special to us!</h3>
            <div className={styles.destinations_container}>
                {placeData.map((place,index)=>
                <Card place={place.place} city={place.city} description={place.shortDescription}/>)}
            </div>
          </section>
            <ContactForm placeData={placeData}/>
        </main>
        </>
    )
}

export default Home;