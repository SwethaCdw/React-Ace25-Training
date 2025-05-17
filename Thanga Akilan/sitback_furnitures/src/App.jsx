import { RouterProvider } from 'react-router'
import {CartDataProvider} from './context/cartContext.jsx';
import router from './constants/RouterConstants.jsx';


function App() {  
  return (
    <CartDataProvider>
      <RouterProvider router={router} />
    </CartDataProvider>
  )
}

export default App;