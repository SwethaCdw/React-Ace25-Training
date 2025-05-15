import gurantee_logo from "./assets/gurantee.png";
import premiumPageBackground from "./assets/premium-page_background.jpg";

const displayPriceInINR = (price)=> (`₹ ${Number(price).toLocaleString()}`);

const HEADER = {
    HEADING: "SITBACK",
    NAV_BAR: {
        ELEMENT_1: {
            NAME: "COUCHES",
            LINK: "/categories/couches"
        }, 
        ELEMENT_2: {
            NAME: "CHAIRS",
            LINK: "/categories/chairs"
        },
        ELEMENT_3:{
            NAME:"PREMIUM*",
            LINK: "/premium"
        }
    },
    PROFILE:{
        LOGGED_IN:"Log Out",
        LOGGED_OUT:"Login Now"
    }
}

const CARD = {
    PRICE: displayPriceInINR,
    QUANTITY: (quantity)=>(`Quantity : ${quantity}`),

    GURANTEE: {
        TEXT: (years)=>(`${years} ${years == 1 ? " YEAR" : " YEARS"} GUARANTEE`),
        LOGO: {
            URL: gurantee_logo,
            NAME: "Gurantee img"
        }
    },
    BUTTON: "ADD TO CART"
}


const LOGIN = {
    HEADING: "SITBACK",
    SUB_HEADING: "FURNITURE",
    FORM: {
        INPUT_1: "Username",
        INPUT_2: "Password",
        BUTTON: "LOGIN"
    }
}


const MYCART = {
    HEADING: "My Cart",
    INFO_SECTION: {
        TOTAL_AMOUNT:{
            NAME: "TOTAL AMOUNT",
            PRICE: (price=0)=>(`₹ ${Number(price).toLocaleString()}`)
        },
        BUTTON: "PLACE ORDER"
    }
}

const CART = {
    PRICE : displayPriceInINR
}

const PREMIUM_SCREEN = {
    BG_IMAGE:{
        LINK: premiumPageBackground,
        NAME:"Couch"
    },
    HEADING:"The Belgian Premium Couch",
    SUBHEADING:"COMING SOON"
}


const ORDER_CONFIRMATION_SCREEN = {
    HEADING:"Order Confirmation",
    MESSAGE: (name)=>(name!="" ? `Thank u ${name},for shopping with us. The items will be delivered within 7 days`:`Thank u for shopping with us.`)
}




export  {
    HEADER,
    CARD,
    MYCART,
    CART,
    LOGIN,
    PREMIUM_SCREEN,
    ORDER_CONFIRMATION_SCREEN
}