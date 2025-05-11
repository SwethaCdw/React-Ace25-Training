import { NavLink, Link } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';
import './navbar.css'
import { useEffect, useState } from 'react';

const Navbar = () => {
    const { user, setUser } = useUserContext();
    const [dropownActive, setDropdownActive] = useState(false);
    
    useEffect(() => {
        localStorage.setItem('user', user);
    }, [user]);

    const handleLogoutClick = () => {
        setUser('');
    }
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
                    <p className='custom-arrow' onClick={() => { setDropdownActive((prev) => !prev) }}>▼</p>
                    {dropownActive && <div className="dropdown">
                        <p className="user-text" onClick={handleLogoutClick}>Logout</p>
                    </div>}
                </div>
                :
                <Link to='/login'><p className="user-text">Login Now</p></Link>
            }
        </header>
    )
}

export default Navbar;