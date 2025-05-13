
import {createBrowserRouter, RouterProvider } from 'react-router'
import { useEffect, useState, Suspense} from "react"
import { Navigate } from 'react-router'
import ShoppingScreen from './screens/shoppingScreen/shoppingScreen'
import LoginScreen from './screens/loginScreen/loginScreen';
import PremiumScreen from './screens/premiumScreen/premiumScreen';
import OrderConfirmationScreen from './screens/orderConfirmationScreen/orderConfirmationScreen.jsx';
import CartContext from "./context/context.jsx";

// Protected route for registered users
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("user"); 
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {  
  const [isCartEmpty, setIsCartEmpty] = useState(true);  
  const [cart, setCart] = useState(()=>{
    const value = JSON.parse(localStorage.getItem("cart"));
    if(value && value.length!=0){
      setIsCartEmpty(false);
      return value;
    }else{
      return [];
    }
  });


  // Set cart from local storage to context state
  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart));
    if(cart.length!=0){
      setIsCartEmpty(false);
    }
  },[cart])

  // Create BrowserRouter with the required routes
  const router = createBrowserRouter([
    {path:'/', element: <Navigate to="/categories/couches" />},
    {path:'/categories/:categoryID', element: <ShoppingScreen />},
    {path:'/confirmOrder', element: <OrderConfirmationScreen />},
    {path:'/premium', element: <ProtectedRoute> <PremiumScreen /></ProtectedRoute>},
    {path:'/login', element: <LoginScreen />}
  ])


  return (
      <CartContext.Provider value={{cart , setCart, isCartEmpty}}>
        <RouterProvider router={router} />
      </CartContext.Provider>
  )
}

export default App;