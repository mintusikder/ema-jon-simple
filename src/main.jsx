import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Shop from './component/Shop/Shop.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home.jsx'
import Orders from './component/Orders/Orders.jsx'
import Inventory from './component/Inventory/Inventory.jsx'
import Login from './component/Login/Login.jsx'
import Review from './component/Review/Review.jsx'


const router = createBrowserRouter([
  {
      path:'/',
      element:<Home></Home>,
      children:[
        {
          path:"/",
          element:<Shop></Shop>
        },
        {
          path:"/orders",
          element:<Orders></Orders>
        },
        {
          path:"/inventory",
          element:<Inventory></Inventory>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/review",
          element:<Review></Review>
        },
      ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
