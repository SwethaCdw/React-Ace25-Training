import DetailsPage, { placeLoader } from "./pages/DetailsPage"
import HomePage from "./pages/HomePage"
import {createBrowserRouter, RouterProvider} from "react-router-dom"

function App() {
  const router = createBrowserRouter([
    {
      index: true, 
      element: <HomePage />
    },
    {
      path: '/details/:placeId',
      element: <DetailsPage />,
      loader: placeLoader
    }
  ])
  return (
      <RouterProvider router={router}/>
  )
}

export default App
