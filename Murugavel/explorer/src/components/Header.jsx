import { useNavigate } from 'react-router-dom';
import { HEADER } from '../constants/textConstants';
import '../assets/styles/header.css';

const Header = () => {
    const navigate = useNavigate();
    return (
        <header className='header'>
            <div className="logo-wrapper" onClick={() => {
                navigate("/"); // navigatubg the user back to homepage on click of logo
            }}>
                <img src="../src/assets/images/logo.png" alt="Logo" />
            </div>
            <ul className="header-nav-list">
                <li className="header-nav-link">{HEADER.HOTELS}</li>
                <li className="header-nav-link">{HEADER.BIKE_RENTALS}</li>
                <li className="header-nav-link">{HEADER.RESTAURANTS}</li>
            </ul>
        </header>  
    );
};

export default Header;