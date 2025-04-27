import Header from "../components/Header";
import HeroBannerImage from "../components/HeroBannerImage";
import DropDown from "../components/DropDown";
import CardContainer from "../containers/CardContainer";
import Card from "../components/Card";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";
import '../assets/styles/details-page.css';
import { useEffect, useRef, useState } from "react";

const DetailsPage = () => {
    const [data, setData] = useState([]);
    // Create ref's
    const placeRef = useRef('');
    useEffect(() => {
        fetch('./src/assets/data/places.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching JSON:', error));
    }, []);
    return (
        <>
            <Header />
            <main className="main">
                <HeroBannerImage image={'cover'} style={{ top: "-7px", width: "62.31rem", height: "46.7rem" }} />
                <div className="hero-container">

                </div>
                <div className="travels-info-container">
                    <p className="welcome-text">WELCOME TO EXPLORER</p>
                    <h2 className="info-text">Your Adventure Travel Expert in the <span className="extra-bold">SOUTH</span></h2>
                </div>
                <div className="place-input-container">
                    <DropDown placeData={data} dropDownRef={placeRef} inputID={'place'} />
                    <Button>EXPLORE</Button>
                </div>  
                <section className="destinations">
                    <h2 className="destinations-header">Destinations</h2>
                    <p className="destinations-subtext">Just for you. Because you and your bike are special to us!</p>
                    <CardContainer>
                        {data.map((placeData, index) =>
                            <Card key={index} place={placeData.place} city={placeData.city} shortDescription={placeData.shortDescription} />
                        )}
                    </CardContainer>
                </section>
                <ContactForm placeData={data} />
            </main>
        </>
    )
}

export default DetailsPage;