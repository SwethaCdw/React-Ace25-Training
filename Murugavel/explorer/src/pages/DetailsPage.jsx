import Header from "../components/Header";
import HeroBannerImage from "../components/HeroBannerImage";
import '../assets/styles/details-page.css';

const DetailsPage = () => {
    return (
        <>
            <Header />
            <main className="main">
                <HeroBannerImage image={'cover'} style={{top: "-7px", width: "62.31rem", height: "46.7rem"}} />
                <div className="travels-info-container">
                    <p className="welcome-text">WELCOME TO EXPLORER</p>
                    <h2 className="info-text">Your Adventure Travel Expert in the <span className="extra-bold">SOUTH</span></h2>
                </div>
            </main>
        </>
    )
}

export default DetailsPage;