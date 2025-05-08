import { createContext, useContext, useState } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartData, setCartData] = useState([]);
    return (
        <CartStateContext.Provider value={cartData}>
            <CartDispatchContext.Provider value={setCartData}>
                {children}
            </CartDispatchContext.Provider>
        </CartStateContext.Provider>
    )
}

export const useCartStateContext = () => {
    return useContext(CartStateContext);
}

export const useCartDispatchContext = () => {
    return useContext(CartDispatchContext);
}

export default CartContextProvider;