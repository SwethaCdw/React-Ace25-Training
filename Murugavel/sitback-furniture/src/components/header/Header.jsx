import { NavLink, Link } from 'react-router-dom';
import './header.css'
import { useUserContext } from '../../context/UserContext';

const Header = () => {
    const { user } = useUserContext();
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
                        <NavLink to={user ? '/premium' : '/login'}>PREMIUM *</NavLink>
                    </li>
                </ul>
            </nav>
            {user ? <p className='user-text'>{user}</p> : <Link to='/login'><p className="user-text">Login Now</p></Link>}
        </header>
    )
}

export default Header;