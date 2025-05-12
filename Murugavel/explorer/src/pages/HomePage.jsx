import {useState} from "react";
import { Link } from "react-router-dom";
import { HOMEPAGE } from "../constants/textConstants";
import Header from "../components/Header";
import HeroBannerImage from "../components/HeroBannerImage";
import DropDown from "../components/DropDown";
import CardContainer from "../containers/CardContainer";
import MainContainer from "../containers/MainContainer";
import LeftInfoContainer from "../containers/LeftInfoContainer";
import Card from "../components/Card";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";
import '../assets/styles/home-page.css';

const HomePage = ({placeData}) => {
    const [place, setPlace] = useState('');
    const handlePlaceChange = (event) => {
        setPlace(event.target.value);
    }
    return (
        <>
            <Header />
            <MainContainer>
                <HeroBannerImage image={'cover'} style={{ width: "62.31rem", height: "46.7rem" }} />
                <LeftInfoContainer style={{ top: '17.65rem', left: '9.27rem'}}>
                    <div className="travels-info-container">
                        <p className="welcome-text">{HOMEPAGE.WELCOME_TEXT}</p>
                        <h2 className="info-text">{HOMEPAGE.INFO_TEXT} <span className="extra-bold">{HOMEPAGE.LOCATION}</span></h2>
                    </div>
                    <div className="place-input-container">
                        <DropDown placeData={placeData} selectedValue={place} handleChange={handlePlaceChange} inputID={'place'} />
                        <Link to={place ? `/details/${place.toLowerCase()}`: '/'}><Button>{HOMEPAGE.BUTTON}</Button></Link>
                    </div>  
                </LeftInfoContainer>
                <section className="destinations ibm-plex">
                    <h2 className="destinations-header">{HOMEPAGE.DESTINATIONS_HEADER}</h2>
                    <p className="destinations-subtext">{HOMEPAGE.DESTINATIONS_SLOGAN}</p>
                    <CardContainer>
                        {placeData.map((data, index) =>
                            <Card key={index} place={data.place} city={data.city} shortDescription={data.shortDescription} />
                        )}
                    </CardContainer>
                </section>
                <ContactForm placeData={placeData} />
            </MainContainer>
        </>
    )
}

export default HomePage;