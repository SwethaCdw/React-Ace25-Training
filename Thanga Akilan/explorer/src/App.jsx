import Home from './pages/Home'
import Details from './pages/Details'
import {createBrowserRouter, RouterProvider } from 'react-router'
import { useEffect, useState } from 'react'



function App() {
  const [locations,setLocations] = useState(null);


  useEffect(()=>{
    fetch('https://nijin-server.vercel.app/api/explorer')
    .then((response)=> response.json())
    .then(locationsData=> {
      setLocations(locationsData);
    })
  },[])

  if(!locations){
    return <p>Loading....</p>
  }

  

  const router = createBrowserRouter([
    {path:'/', element: <Home placeData={locations}/>},
    {path:'/details/:locationName', element: <Details placeData={locations}/>},
    {path: '*', element: <Home placeData={locations} />}
  ])


  return (
      <RouterProvider router={router} />
  )
}

export default App;