  
import {createBrowserRouter } from 'react-router';
import { Navigate } from 'react-router';
import ShoppingScreen from "../screens/shoppingScreen/shoppingScreen.jsx";
import LoginScreen from '../screens/loginScreen/loginScreen.jsx';
import PremiumScreen from '../screens/premiumScreen/premiumScreen.jsx';
import OrderConfirmationScreen from '../screens/orderConfirmationScreen/orderConfirmationScreen.jsx';
import { LOCAL_STORAGE } from './localStorageConstants.js';
  
  // Protected route for registered users
const ProtectedRoute = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem(LOCAL_STORAGE.USER.NAME); 
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };
  
// Create BrowserRouter with the required routes
const router = createBrowserRouter([
{path:'/', element: <Navigate to="/categories/couches" />},
{path:'/categories/:categoryID', element: <ShoppingScreen />},
{path:'/confirmOrder', element: <OrderConfirmationScreen />},
{path:'/premium', element: <ProtectedRoute> <PremiumScreen /></ProtectedRoute>},
{path:'/login', element: <LoginScreen />}
])


  export default router;