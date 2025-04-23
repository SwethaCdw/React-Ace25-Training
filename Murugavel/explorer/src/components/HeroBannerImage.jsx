import '../assets/styles/hero-banner.css'

const HeroBannerImage = ({ place }) => {
    return (
        <div className="hero-banner-wrapper">
            <img src={`./src/assets/images/places/${place}.png`} alt="Banner image" />
        </div>
    );
}

export default HeroBannerImage;