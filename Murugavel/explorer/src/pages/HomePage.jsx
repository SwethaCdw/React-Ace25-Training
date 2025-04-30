import {useState} from "react";
import { Link } from "react-router-dom";
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
    return (
        <>
            <Header />
            <MainContainer>
                <HeroBannerImage image={'cover'} style={{ width: "62.31rem", height: "46.7rem" }} />
                <LeftInfoContainer style={{ top: '17.65rem', left: '9.27rem'}}>
                    <div className="travels-info-container">
                        <p className="welcome-text">WELCOME TO EXPLORER</p>
                        <h2 className="info-text">Your Adventure Travel Expert in the <span className="extra-bold">SOUTH</span></h2>
                    </div>
                    <div className="place-input-container">
                        <DropDown placeData={placeData} setValue = {setPlace} inputID={'place'} />
                        <Link to={`/details/${place.toLowerCase()}`}><Button>EXPLORE</Button></Link>
                    </div>  
                </LeftInfoContainer>
                <section className="destinations">
                    <h2 className="destinations-header">Destinations</h2>
                    <p className="destinations-subtext">Just for you. Because you and your bike are special to us!</p>
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