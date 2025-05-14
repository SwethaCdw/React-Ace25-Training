import React from "react"
import styles from './Titlebar.module.css'
import { TITLEBAR as CONSTANTS } from "../../contants"

const TitleBar = () => {
    return(
        <header className={styles.title_bar_section}>
            <div className={styles.title_logo_wrapper}>
                <a href={CONSTANTS.LOGO.CLICK_URL}><img className={styles.title_logo_pic} src={CONSTANTS.LOGO.IMAGE.URL} alt={CONSTANTS.LOGO.IMAGE.NAME} /></a>
            </div>
            <nav className={styles.title_menu_nav}>
                <ul className={styles.title_nav}>
                    <li className={styles.nav_element}><a href={CONSTANTS.NAV_BAR.ELEMENT_1.URL}>{CONSTANTS.NAV_BAR.ELEMENT_1.NAME}</a></li>
                    <li className={styles.nav_element}><a href={CONSTANTS.NAV_BAR.ELEMENT_2.URL}>{CONSTANTS.NAV_BAR.ELEMENT_2.NAME}</a></li>
                    <li className={styles.nav_element}><a href={CONSTANTS.NAV_BAR.ELEMENT_3.URL}>{CONSTANTS.NAV_BAR.ELEMENT_3.NAME}</a></li>
                </ul>
            </nav>
        </header>
    )
}


export default TitleBar;