
import logo from "./assets/logo.png";


const TITLEBAR = {
    LOGO: {
        IMAGE: {
            NAME:"Logo",
            URL:logo
        },
        CLICK_URL:"/"
    },
    NAV_BAR:{
        ELEMENT_1:{
            NAME: "Hotels",
            URL: "#"
        },
        ELEMENT_2:{
            NAME: "Bike Rentals",
            URL: "#"
        },
        ELEMENT_3:{
            NAME: "Restaurants",
            URL:"#"
        }
    }
}

const PROMO_CONTAINER_HOME = {
    HEADING : "WELCOME TO EXPLORER",
    SUBHEADING: "Your Adventure Travel Expert in the ",
    SUBHEADING_HIGHLIGHT: "SOUTH",
    BUTTON_TEXT: "EXPLORE",
    IMAGE_NAME: "cover"
}

const PROMO_CONTAINER_DETAILS = {
    TEMPERATURE_UNIT: "°C"
}

const SELECT_INPUT = {
    DEFAULT_VALUE:  "Choose"
}

const HOME_PAGE = {
    HEADING: "Destinations",
    SUBHEADING: "Just for you. Because you and your bike are special to us!"
}

const DETAILS_PAGE = {
    HEADING: "Similar Destinations",
    SUBHEADING: (place) => (`Because you liked ${place}`)
}

const CONTACT_US_FORM = {
    HEADING: "Contact Us",
    SUBHEADING:"Out Sales Team will reach out to you ASAP!",
    NAME_LABEL: "Name",
    SOURCE_LABEL: "Your Home Town",
    DESTINATION_LABEL:"Where would you like to go?",
    CONTACT_NUMBER_LABEL: "Contact Number",
    FORM_SUBMIT_BUTTON:"SUBMIT INTEREST"
}

const SUCCESS_BANNER = {
    DESCRIPTION: (name, source, destination)=>(`Thank You ${name} for expressing your interest in travelling with us. Our Sales team will get back with the best packages from ${source} to  ${destination}.`),
}





export {
    TITLEBAR,
    PROMO_CONTAINER_HOME,
    PROMO_CONTAINER_DETAILS,
    SELECT_INPUT,
    HOME_PAGE,
    DETAILS_PAGE,
    CONTACT_US_FORM,
    SUCCESS_BANNER

}