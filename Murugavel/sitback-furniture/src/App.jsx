import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom"
import HomeScreen from "./screens/HomeScreen/HomeScreen"
import RootLayout from "./layouts/RootLayout"
import CartContextProvider from "./context/CartContext"

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
        }
      ]
    }
  ])
  return (
    <>
      <CartContextProvider>
        <RouterProvider router={router} />
      </CartContextProvider>
    </>
  )
}

export default App
