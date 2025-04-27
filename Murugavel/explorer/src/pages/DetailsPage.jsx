import Header from "../components/Header";
import HeroBannerImage from "../components/HeroBannerImage";
import MainContainer from "../containers/MainContainer";
import LeftInfoContainer from "../containers/LeftInfoContainer";
import ContactForm from "../components/ContactForm";
import '../assets/styles/details-page.css'
// import {} from 'react-router-dom'

const DetailsPage = () => {
    return (
        <>
            <Header />
            <MainContainer>
                <HeroBannerImage image={'masinagudi'} style={{ width: "63.25rem", height: "47.3rem" }} />
                <LeftInfoContainer style={{top: '21rem', left: '7.1rem', width: '65.65rem'}}>
                    <h1 className="place-text">Masinagudi</h1>
                    <p className="place-info">Never Ending Paddy Fields and Narrorw Roads</p>
                    <p className="weather-text">32&deg;C</p>
                </LeftInfoContainer>
                <div className="place-details">
                    <div className="description-text-wrapper">
                        <p className="description-text">
                            {}
                        </p>
                        <p className="description-text">
                            {}
                        </p>
                    </div>   
                </div>
                {/* <ContactForm placeData={}/> */}
            </MainContainer>       
        </>
    )
}

export default DetailsPage;