import React from "react"
import logo from "../../assets/logo.png"
import styles from './Titlebar.module.css'

const TitleBar = () => {
    return(
        <header className={styles.title_bar_section}>
            <div className={styles.title_logo_wrapper}>
                <img src={logo} alt="Logo" />
            </div>
            <nav className={styles.title_menu_nav}>
                <ul>
                    <li className={styles.nav_element}><a>Hotels</a></li>
                    <li className={styles.nav_element}><a>Bike Rentals</a></li>
                    <li className={styles.nav_element}><a>Restaurants</a></li>
                </ul>
            </nav>
        </header>
    )
}


export default TitleBar;