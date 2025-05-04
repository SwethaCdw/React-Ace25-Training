import { NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <header className="header">
            <h1 className="logo-text">SITBACK</h1>
            <nav>
                <ul className="nav-list">
                    <li className="nav-link">
                        <NavLink to="/categories/couches">COUCHES</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to="/categories/chairs">CHAIRS</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to="/premium">PREMIUM *</NavLink>
                    </li>
                </ul>
            </nav>
            <p className="login-text">Login Now</p> 
        </header>
    )
}

export default Header;