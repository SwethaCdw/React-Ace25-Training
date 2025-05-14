import Home from './pages/home/Home'
import Details from './pages/details/Details'
import {createBrowserRouter, RouterProvider } from 'react-router'
import { useEffect, useState } from 'react'
import { SpinnerDiamond } from 'spinners-react'


function App() {
  const [locations,setLocations] = useState(null);
  const[isLoading, setIsLoading] = useState(true);


  useEffect(()=>{
    fetch('https://nijin-server.vercel.app/api/explorer')
    .then((response)=> response.json())
    .then(locationsData=> {
      setLocations(locationsData);
      setIsLoading(false);
    })
  },[])

  if(isLoading){
    return <SpinnerDiamond size={100} enabled={true} style={{position:"fixed", top:"50%", right:"50%" }}/>
  }

  

  const router = createBrowserRouter([
    {path:'/', element: <Home placeData={locations}/>},
    {path:'/details/:placeName', element: <Details placeData={locations} />},
    {path: '*', element: <Home placeData={locations} />}
  ])


  return (
      <RouterProvider router={router} />
  )
}

export default App;