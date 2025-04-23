import '../assets/styles/header.css'

const Header = () => {
    return (
        <>
            <div className="logo-wrapper">
                <img src="./src/assets/images/logo.png" alt="Logo" />
            </div>
            <ul className="header-nav-list">
                <li className="header-nav-link">Hotels</li>
                <li className="header-nav-link">Bike Rentals</li>
                <li className="header-nav-link">Restaurants</li>
            </ul>
        </>  
    );
};

export default Header;