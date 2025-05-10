import { useNavigate, useParams } from "react-router";
import ContactForm from "../../components/contactForm/ContactForm";
import TitleBar from "../../components/titlebar/Titlebar";
import { useState, useEffect } from "react";
import { SpinnerDiamond } from 'spinners-react'
import DescriptionContainer from "../../containers/DescriptionContainer";
import PromoBanner from "../../components/promoBanner/PromoBanner";
import CityPromo from "../../components/cityPromo/Citypromo";
import styles from "./Details.module.css"
import CardsContainer from "../../containers/CardsContainer";
import { DETAILS_PAGE as CONSTANTS } from "../../contants";

const getPlaceDetail = async (place)=>{
    const response = await fetch(`https://nijin-server.vercel.app/api/explorer/places/${place}`);
    const data = await response.json();
    return data;
}


const Details = ({placeData}) => {
    const[similarDestinations, setSimilarDestinations] = useState([])
    const [isLoading,setIsLoading] = useState(true);
    const [placeInfo, setPlaceInfo] = useState({});
    const {placeName} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        
        const fetchRelatedPlaces = async () => {
        try{
        const response = await fetch(`https://nijin-server.vercel.app/api/explorer/places/${placeName}`);
        const data = await response.json();
        setPlaceInfo(data); 
        
        if (data.relatedPlaces && data.relatedPlaces.length > 0) {
            const promises = data.relatedPlaces.map(place => getPlaceDetail(place));
            const result = await Promise.all(promises);
            setSimilarDestinations(result);
        }}
        catch(error) {
            console.log(error);
            navigate('/');
        }finally{
          setIsLoading(false);
        }
        };
      
        fetchRelatedPlaces();
      }, [placeName]);




    if(isLoading){
        return(
            <SpinnerDiamond size={100} enabled={true} style={{position:"fixed", top:"50%", right:"50%" }}/>
        )
    }

    return (
        <>
        <TitleBar />
        <PromoBanner imageName={placeInfo.city}>
            <CityPromo placeInfo={placeInfo} />
        </PromoBanner>
        <DescriptionContainer description={placeInfo.fullDescription} />
        <CardsContainer styles={styles} heading={CONSTANTS.HEADING} subheading={CONSTANTS.SUBHEADING(placeInfo.city)} placeData={similarDestinations} />
        <ContactForm placeData={placeData} />
        </>
    )
}

export default Details;