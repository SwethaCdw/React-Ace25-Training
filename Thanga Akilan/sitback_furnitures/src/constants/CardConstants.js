import gurantee_logo from "/images/gurantee.png";

export const CARD = {
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
