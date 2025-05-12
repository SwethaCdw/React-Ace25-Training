
import {createBrowserRouter, RouterProvider } from 'react-router'
import { useEffect, useState} from "react"
import { Navigate } from 'react-router'
import ShoppingScreen from './screens/shoppingScreen/shoppingScreen'
import LoginScreen from './screens/loginScreen/loginScreen';
import PremiumScreen from './screens/premiumScreen/premiumScreen';
import OrderConfirmationScreen from "./screens/orderCOnfirmationScreen/orderConfirmationScreen"
import CartContext from "./context/context.jsx";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("user"); 
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {  
  const [isCartEmpty, setIsCartEmpty] = useState(true);  
  const [cart, setCart] = useState(()=>{
    const value = localStorage.getItem("cart");
    return(!value ? (JSON.parse(value), setIsCartEmpty(false)): []);
  });

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart));
  },[cart])

  const router = createBrowserRouter([
    {path:'/', element: <Navigate to="/categories/couches" />},
    {path:'/categories/:categoryID', element: <ShoppingScreen setIsCartEmpty={setIsCartEmpty} isCartEmpty={isCartEmpty}/>},
    {path:'/confirmOrder', element: <OrderConfirmationScreen />},
    {path:'/premium', element: <ProtectedRoute> <PremiumScreen /></ProtectedRoute>},
    {path:'/login', element: <LoginScreen />}
  ])


  return (
      <CartContext.Provider value={{cart , setCart}}>
        <RouterProvider router={router} />
      </CartContext.Provider>
  )
}

export default App;