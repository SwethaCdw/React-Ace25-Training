import { useParams } from "react-router";
import ContactForm from "../components/contactForm/ContactForm";
import PromoImage from "../components/promoImage/PromoImage";
import TitleBar from "../components/titlebar/Titlebar";
import Card from "../components/card/Card";
import { useState, useEffect } from "react";
import { SpinnerDiamond } from 'spinners-react'
import './Details.css'

const getPlaceInfo = async (place) =>{
   const response = await fetch(`https://nijin-server.vercel.app/api/explorer/places/${place}`);
     return response.json();
}


const Details = ({placeData}) => {
    const place = useParams();
    const[similarDestinations, setSimilarDestinations] = useState([])
    const [isLoading,setIsLoading] = useState(true);
    const [placeInfo, setPlaceInfo] = useState({});


    const fetchRelevantPlaces = async () => {
        const relevantPlaces = placeDetails.relatedPlaces;
        const resData = await Promise.all(
            relevantPlaces.map(async (placeName) =>
                await fetchPlaceData(placeName.toLowerCase())
            )
        );
        setRelevantPlace(resData);
    }

    useEffect(()=>{
        fetch(`https://nijin-server.vercel.app/api/explorer/places/${place.locationName}`)
        .then((response)=> response.json())
        .then(response => {
            setPlaceInfo(response);
            setIsLoading(false);
        })

        
    },[])
    if(isLoading){
        return(
            <SpinnerDiamond size={100} enabled={true} style={{position:"fixed", top:"50%", right:"50%" }}/>
        )
    }

    return (
        <>
        <TitleBar />
        <section className="promo_section">
            <div className="promo_section_content">
                <h2 className="promo_city">{placeInfo.city}</h2>
                <h3 className="promo_description">{placeInfo.place}</h3>
                <p className="promo_temperature">Temperature</p>
            </div>
            <PromoImage image={place.locationName}/>
        </section>
        <section className="description_section">
            <p className="place_description">{placeInfo.fullDescription}</p>
        </section>
        <section className="similar_destinations_section">
            <h4>Similar Destinations</h4>
            <p>Because you liked {placeInfo.city}</p>
            <div>
                {(placeInfo.relatedPlaces).map((place)=>{
                    <Card place={place.place} city={place.city} description={place.shortDescription} />
                })}
            </div>
        </section>
        <ContactForm placeData={placeData} />
        </>
    )
}

export default Details;