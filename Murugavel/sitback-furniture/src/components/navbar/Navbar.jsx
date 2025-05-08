import { NavLink, Link } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import './navbar.css'

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
                        <NavLink to='/login'>PREMIUM *</NavLink>
                    </li>
                </ul>
            </nav>
            {user ?
                <div className='user-info'>
                    <p className='user-text'>{user}</p>
                    <p className='custom-arrow'>▼</p>
                </div>
                :
                <Link to='/login'><p className="user-text">Login Now</p></Link>
            }
        </header>
    )
}

export default Navbar;