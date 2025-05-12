import styles from './header.module.css'
import { HEADER } from '../../constants';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/context';
import { useLocation, useNavigate, useParams } from 'react-router';
import { GoTriangleDown } from "react-icons/go";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {pathname} = location;
    const page = useParams();
    const {setCart} = useContext(CartContext);
    const [userName, setUserName] = useState('');
    const[isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("user"));
        if(user){
            setUserName(user.userName);
            setIsLoggedIn(true);
        }
    })


    const handleLogOut = () => {
        localStorage.removeItem("user")
        setCart([]);
        setIsLoggedIn(false);
        navigate("/")
    }
    return(
        <header className={styles.header}>
            <div className={styles.heading_wrapper}>
                <h1 className={styles.heading}><a href='/'>{HEADER.HEADING}</a></h1>
            </div> 
            <ul className={styles.nav_bar}>
                <li><a className={`${ pathname == HEADER.NAV_BAR.ELEMENT_1.LINK ? styles.active_nav_element:styles.nav_element}`} href={HEADER.NAV_BAR.ELEMENT_1.LINK} >{HEADER.NAV_BAR.ELEMENT_1.NAME}</a></li>
                <li><a className={`${pathname == HEADER.NAV_BAR.ELEMENT_2.LINK ? styles.active_nav_element:styles.nav_element}`} href={HEADER.NAV_BAR.ELEMENT_2.LINK} >{HEADER.NAV_BAR.ELEMENT_2.NAME}</a></li>
                <li><a className={`${pathname == HEADER.NAV_BAR.ELEMENT_3.LINK ? styles.active_nav_element:styles.nav_element}`} href={HEADER.NAV_BAR.ELEMENT_3.LINK} >{HEADER.NAV_BAR.ELEMENT_3.NAME}</a></li>
            </ul>
            <div className={styles.profile_container}>
                {
                    isLoggedIn? (
                        <a className={styles.header_logout} onClick={handleLogOut}>{userName}<GoTriangleDown /></a>)
                    :(
                        <a className={styles.header_logout} href='/login'>{HEADER.PROFILE.LOGGED_OUT}</a>)
                }
            </div>
        </header>
    )
}

export default Header;