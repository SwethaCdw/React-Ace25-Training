import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom"
import HomeScreen from "./screens/home-screen/HomeScreen"
import RootLayout from "./layouts/RootLayout"
import CartContextProvider from "./context/CartContext"
import LoginScreen from "./screens/login-screen/LoginScreen"
import UserContextProvider from "./context/UserContext"
import PremiumScreen from "./screens/premium-screen/PremiumScreen"
import ConfirmationScreen from "./screens/order-confirmation-screen/ConfirmationScreen"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          loader: () => redirect('/categories/couches')
        },
        {
          path: 'categories/:categoryId',
          element: <HomeScreen />
        },
        {
          path: 'premium',
          element: <PremiumScreen />
        },
        {
          path: 'confirmOrder',
          element: <ConfirmationScreen />
        }
      ]
    },
    {
      path: '/login',
      element: <LoginScreen />
    },
    {
      path: '*',
      element: <RootLayout />
    }
  ])
  return (
    <>
      <UserContextProvider>
        <CartContextProvider>
          <RouterProvider router={router} />
        </CartContextProvider>
      </UserContextProvider>
    </>
  )
}

export default App
