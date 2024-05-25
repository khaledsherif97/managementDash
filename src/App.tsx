
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import LayOut from './components/LayOut/LayOut';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Dashboard from './components/Dashboard/Dashboard';


function App() {
  let routes=createBrowserRouter([
    { path:"",element:<LayOut />,children:[
  
      {path:"/login",element:<Login />},
      {path:"/home",element:<Home />},
      {path:"/dash",element:<Dashboard />},
   

  
      {path:"*",element:<NotFound />},
  
    ]}
  ])

  return (
    <>
     <RouterProvider router={routes}/>
   
    </>
  )
}

export default App
