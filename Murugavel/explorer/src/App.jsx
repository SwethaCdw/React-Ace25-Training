import { useState, useEffect } from "react"
import DetailsPage, { placeLoader } from "./pages/DetailsPage"
import HomePage from "./pages/HomePage"
import Loader from "./components/Loader";
import {createBrowserRouter, RouterProvider} from "react-router-dom"

function App() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://nijin-server.vercel.app/api/explorer')
        .then(response => response.json())
        .then(data => {
          setPlaces(data);
          setLoading(false);
        })
        .catch(error => console.error('Error fetching JSON:', error));
  }, []);

  if (loading) {
    return <Loader />
  }

  const router = createBrowserRouter([
    {
      index: true, 
      element: <HomePage placeData={places} />
    },
    {
      path: '/details/:placeId',
      element: <DetailsPage placeData={places} />,
      loader: placeLoader
    },
    {
      path: '*',
      element: <HomePage placeData={places} />
    }
  ])
  return (
      <RouterProvider router={router} />
  )
}

export default App
