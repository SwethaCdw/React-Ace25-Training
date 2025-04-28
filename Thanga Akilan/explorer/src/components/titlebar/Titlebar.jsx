import React from "react"
import logo from "../../assets/logo.png"
import './Titlebar.css'

const TitleBar = () => {
    return(
        <header className="title-bar-section">
            <div className="title-logo-wrapper">
                <img src={logo} alt="Logo" />
            </div>
            <nav className="title-menu-nav">
                <ul>
                    <li><a>Hotels</a></li>
                    <li><a>Bike Rentals</a></li>
                    <li><a>Restaurants</a></li>
                </ul>
            </nav>
        </header>
    )
}


export default TitleBar;