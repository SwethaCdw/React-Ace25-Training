import styles from '../header/header.module.css'

const NavElement = ({path, isLoggedIn, link , name, loginRequired}) => {
    return(
        <li className={`${loginRequired && !isLoggedIn ? styles.nav_element_hidden:""}`}>
            <a className={`${ path == link ? styles.active_nav_element:styles.nav_element}`} href={link} >{name}</a>
        </li>
        
    )
}

export default NavElement;