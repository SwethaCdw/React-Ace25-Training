import { useNavigate } from 'react-router-dom';
import { urlMap } from '../constants/urlconstants';
import { CARD } from '../constants/textConstants';
import Button from './Button';
import '../assets/styles/card.css';

const Card = ({ place, city, shortDescription }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/details/${city.toLowerCase()}`);
    }
    return (
        <div className="card">
            <div className="card-image-wrapper">
                <img src={urlMap.get(city.toLowerCase())} alt={city} />
            </div>
            <p className="card-title">{place}</p>
            <h4 className="card-place">{city}</h4>
            <p className="card-description">
                {shortDescription}
            </p>
            <Button handleClick={handleClick}>{CARD.BUTTON}</Button> {/* Button to navigate to the details page */}
        </div>
    );
}

export default Card;