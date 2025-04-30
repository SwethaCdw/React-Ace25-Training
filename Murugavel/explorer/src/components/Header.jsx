import { useNavigate } from 'react-router-dom';
import '../assets/styles/header.css'

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
                <li className="header-nav-link">Hotels</li>
                <li className="header-nav-link">Bike Rentals</li>
                <li className="header-nav-link">Restaurants</li>
            </ul>
        </header>  
    );
};

export default Header;