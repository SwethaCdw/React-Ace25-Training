import '../assets/styles/hero-banner.css'

const HeroBannerImage = ({ image, style }) => {
    return (
        <div className="hero-banner-wrapper" style={style}>
            <img src={`./src/assets/images/${image}.png`} alt="Banner image" />
        </div>
    );
}

export default HeroBannerImage;