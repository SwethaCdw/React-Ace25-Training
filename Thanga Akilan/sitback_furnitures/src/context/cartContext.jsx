import { createContext } from "react";
import { useState, useEffect } from "react";
import { LOCAL_STORAGE } from "../constants/localStorageConstants";


const CartContext = createContext([]);


const CartDataProvider = ({children}) => {
    const [isCartEmpty, setIsCartEmpty] = useState(true);  
    const [cart, setCart] = useState(()=>{
      const value = JSON.parse(localStorage.getItem(LOCAL_STORAGE.CART.NAME));
      if(value && value.length!=0){
        setIsCartEmpty(false);
        return value;
      }else{
        return [];
      }
    });
  
  
    // Set cart from local storage to context state
    useEffect(()=>{
      localStorage.setItem(LOCAL_STORAGE.CART.NAME, JSON.stringify(cart));
      if(cart.length!=0){
        setIsCartEmpty(false);
      }
    },[cart])
  
    return(
        <CartContext.Provider value={{cart , setCart, isCartEmpty}}>
            {children}
        </CartContext.Provider>
    )
}


export{
    CartDataProvider,
    CartContext
} 