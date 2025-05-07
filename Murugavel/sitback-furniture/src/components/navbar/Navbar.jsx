import { NavLink, Link } from 'react-router-dom';
import './navbar.css'
import { useUserContext } from '../../context/UserContext';

const Navbar = () => {
    const { user } = useUserContext();
    return (
        <header className="header">
            <Link to='/'><h1 className="logo-text">SITBACK</h1></Link>
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

export default Navbar;