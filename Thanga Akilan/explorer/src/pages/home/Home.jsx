
import TitleBar from '../../components/titlebar/Titlebar'
import ContactForm from '../../components/contactForm/ContactForm'
import PromoContainerHome from '../../containers/promoContainerHome'
import CardsContainer from '../../containers/CardsContainer'

const Home = ({placeData}) => {
    return(
        <>
        <TitleBar />
        <main>
          <PromoContainerHome placeData={placeData}/>
          <CardsContainer placeData={placeData} />
          <ContactForm placeData={placeData}/>
        </main>
        </>
    )
}

export default Home;