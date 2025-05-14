import styles from "./Home.module.css"
import TitleBar from '../../components/titlebar/Titlebar'
import ContactForm from '../../components/contactForm/ContactForm'
import CardsContainer from '../../containers/CardsContainer'
import PromoBanner from '../../components/promoBanner/PromoBanner'
import PromoInfoHome from '../../components/promoInfoHome/PromoInfoHome'
import { PROMO_CONTAINER_HOME as CONSTANTS } from '../../contants'

const Home = ({placeData}) => {
    return(
        <>
        <TitleBar />
        <main>
          <PromoBanner imageName={CONSTANTS.IMAGE_NAME}>
            <PromoInfoHome placeData={placeData} />
          </PromoBanner>
          <CardsContainer styles={styles} placeData={placeData} />
          <ContactForm placeData={placeData}/>
        </main>
        </>
    )
}

export default Home;