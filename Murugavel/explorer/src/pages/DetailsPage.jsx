import { useEffect, useState } from "react";
import { useParams, useLoaderData } from 'react-router-dom'
import Header from "../components/Header";
import Card from "../components/Card";
import ContactForm from "../components/ContactForm";
import HeroBannerImage from "../components/HeroBannerImage";
import MainContainer from "../containers/MainContainer";
import LeftInfoContainer from "../containers/LeftInfoContainer";
import CardContainer from "../containers/CardContainer";
import '../assets/styles/details-page.css'

// Function to fetch the details of the provided placeName from the arguments
const fetchPlaceData = async (placeName) => {
    const response = await fetch(`https://nijin-server.vercel.app/api/explorer/places/${placeName}`)
    return response.json();
}

const DetailsPage = ({placeData}) => {
    const { placeId } = useParams();
    const placeDetails = useLoaderData(); // contains the data of the current fetched place through loader function
    const [relevantPlace, setRelevantPlace] = useState([]); // state that denotes array of related places
    const [temperature, setTemperature] = useState('');
    useEffect(() => {
        const fetchRelevantPlaces = async () => {
            const relevantPlaces = placeDetails.relatedPlaces;
            const resData = await Promise.all(
                relevantPlaces.map(async (placeName) =>
                    await fetchPlaceData(placeName.toLowerCase())
                )
            );
            setRelevantPlace(resData);
        }
        const fetchTemperature = async () => {
            const response = await
                fetch(`http://api.weatherapi.com/v1/current.json?key=81bedab9266646c2a44100958253004&q=${placeId == 'masinagudi' ? 'ooty' : placeId}`);
            const data = await response.json();
            const locationTemperature = data.current.temp_c;
            setTemperature(locationTemperature);
        }
        fetchRelevantPlaces();
        fetchTemperature();
    }, [placeId]);
        
    return (
        <>
            <Header />
            <MainContainer>
                <HeroBannerImage image={placeId} style={{ width: "63.25rem", height: "47.3rem" }} />
                <LeftInfoContainer style={{top: '21rem', left: '7.1rem', width: '65.65rem'}}>
                    <h1 className="place-text">{placeDetails.city}</h1>
                    <p className="place-info">{placeDetails.place}</p>
                    <p className="weather-text">{temperature}&deg;C</p>
                </LeftInfoContainer>
                <div className="place-details">
                    <div className="description-text-wrapper">
                        <p className="description-text">
                            {placeDetails.shortDescription}
                        </p>
                        <p className="description-text">
                            {placeDetails.fullDescription}
                        </p>
                    </div>  
                    <h2 className="destinations-header">Similar Destinations</h2>
                    <p className="destinations-subtext">Because you liked {placeDetails.city}</p>
                    <CardContainer>
                        {relevantPlace.map((data, index) =>
                            <Card key={index} place={data.place} city={data.city} shortDescription={data.shortDescription} />
                        )}
                    </CardContainer>
                </div>
                <ContactForm placeData={placeData}/>
            </MainContainer>       
        </>
    )
}

export const placeLoader = async ({params}) => {
    const response = await fetch(`https://nijin-server.vercel.app/api/explorer/places/${params.placeId}`);
    return response.json();
}

export default DetailsPage;