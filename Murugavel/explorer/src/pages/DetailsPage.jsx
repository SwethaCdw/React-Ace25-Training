import Header from "../components/Header";
import HeroBannerImage from "../components/HeroBannerImage";
import MainContainer from "../containers/MainContainer";
import LeftInfoContainer from "../containers/LeftInfoContainer";
import ContactForm from "../components/ContactForm";
import '../assets/styles/details-page.css'
import { useEffect, useState } from "react";
import {useParams, useLoaderData} from 'react-router-dom'

const DetailsPage = () => {
    const { placeId } = useParams();
    console.log(placeId);
    const placeData = useLoaderData();
    return (
        <>
            <Header />
            <MainContainer>
                <HeroBannerImage image={placeId} style={{ width: "63.25rem", height: "47.3rem" }} />
                <LeftInfoContainer style={{top: '21rem', left: '7.1rem', width: '65.65rem'}}>
                    <h1 className="place-text">{placeData.city}</h1>
                    <p className="place-info">{placeData.place}</p>
                    <p className="weather-text">32&deg;C</p>
                </LeftInfoContainer>
                <div className="place-details">
                    <div className="description-text-wrapper">
                        <p className="description-text">
                            {placeData.shortDescription}
                        </p>
                        <p className="description-text">
                            {placeData.fullDescription}
                        </p>
                    </div>   
                </div>
                {/* <ContactForm placeData={}/> */}
            </MainContainer>       
        </>
    )
}

export const placeLoader = async ({params}) => {
    const response = await fetch(`https://nijin-server.vercel.app/api/explorer/places/${params.placeId}`);
    return response.json();
}

export default DetailsPage;