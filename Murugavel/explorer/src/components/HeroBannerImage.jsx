import '../assets/styles/hero-banner.css'

const HeroBannerImage = ({ image, style }) => {
    return (
        <div className="hero-banner-wrapper">
            <img src={`./src/assets/images/${image}.png`} alt="Banner image" style={style} />
        </div>
    );
}

export default HeroBannerImage;