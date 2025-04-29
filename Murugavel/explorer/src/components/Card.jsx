import Button from './Button';
import '../assets/styles/card.css'
import { Link } from 'react-router-dom';

const Card = ({place, city, shortDescription}) => {
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
            <Link to={`/details/${city.toLowerCase()}`}><Button>READ MORE</Button></Link>
        </div>
    );
}

export default Card;