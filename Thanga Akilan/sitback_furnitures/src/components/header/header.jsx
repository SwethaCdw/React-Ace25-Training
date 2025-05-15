import styles from './header.module.css'
import { HEADER } from '../../constants';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/context';
import { useLocation, useNavigate, useParams } from 'react-router';
import { GoTriangleDown } from "react-icons/go";
import Button from '../button/button';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {pathname} = location;
    const page = useParams();
    const {setCart} = useContext(CartContext);
    const [userName, setUserName] = useState('');
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const [showLogoutBtn, setShowLogoutBtn] = useState(false);

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
                { isLoggedIn && <li><a className={`${pathname == HEADER.NAV_BAR.ELEMENT_3.LINK ? styles.active_nav_element:styles.nav_element}`} href={HEADER.NAV_BAR.ELEMENT_3.LINK} >{HEADER.NAV_BAR.ELEMENT_3.NAME}</a></li>}
            </ul>
            <div className={styles.profile_container}>
                {
                    (!isLoggedIn)? (
                        <div><a className={styles.header_logout} href='/login'>{HEADER.PROFILE.LOGGED_OUT}</a></div>)
                    :(
                       <div className={styles.logout_container}>
                            <a className={styles.header_logout} onClick={()=> {setShowLogoutBtn(prev=>!prev)}}>{userName}<GoTriangleDown /></a>
                    
                            {showLogoutBtn && <div className={styles.profile_logout_dropdown_show}>
                                <Button onClick={handleLogOut}>{HEADER.PROFILE.LOGGED_IN}</Button>
                            </div>}
                        </div>)}
            </div>
        </header>
    )
}

export default Header;