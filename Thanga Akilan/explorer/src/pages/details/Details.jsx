import { useNavigate, useParams } from "react-router";
import ContactForm from "../../components/contactForm/ContactForm";
import TitleBar from "../../components/titlebar/Titlebar";
import { useState, useEffect } from "react";
import { SpinnerDiamond } from 'spinners-react'
import PromoContainerDetails from "../../containers/PromoContainerDetails";
import SimilarPlacesContainer from "../../containers/SimilarPlacesContainer";
import DescriptionContainer from "../../containers/DescriptionContainer";

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
            console.log(response);
            
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
        <PromoContainerDetails placeInfo={placeInfo}/>
        <DescriptionContainer description={placeInfo.fullDescription} />
        <SimilarPlacesContainer city={placeInfo.city} similarDestinations={similarDestinations} />
        <ContactForm placeData={placeData} />
        </>
    )
}

export default Details;