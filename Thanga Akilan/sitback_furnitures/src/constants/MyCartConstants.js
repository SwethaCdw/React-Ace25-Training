export const MYCART = {
    HEADING: "My Cart",
    INFO_SECTION: {
        TOTAL_AMOUNT:{
            NAME: "TOTAL AMOUNT",
            PRICE: (price=0)=>(`₹ ${Number(price).toLocaleString()}`)
        },
        BUTTON: "PLACE ORDER"
    },
    TOAST: {
        MESSAGE: "Cart is empty",
        POSITION: "bottom-right"
    },
    NAVIGATE_TO : "/confirmOrder"
}
