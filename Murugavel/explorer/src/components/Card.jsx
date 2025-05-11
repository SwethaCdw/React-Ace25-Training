import { Link, useNavigate } from 'react-router-dom';
import Button from './Button';
import '../assets/styles/card.css'

const Card = ({ place, city, shortDescription }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/details/${city.toLowerCase()}`);
    }
    return (
        <div className="card">
            <div className="card-image-wrapper">
                <img src={`../src/assets/images/${city.toLowerCase()}.png`} alt={city} />
            </div>
            <p className="card-title">{place}</p>
            <h4 className="card-place">{city}</h4>
            <p className="card-description">
                {shortDescription}
            </p>
            <Button handleClick={handleClick}>READ MORE</Button> {/* Button to navigate to the details page */}
        </div>
    );
}

export default Card;