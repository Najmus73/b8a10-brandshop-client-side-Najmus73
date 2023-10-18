import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import AddProduct from './Components/Add Product/Add Product';
import MyCart from './Components/My Cart/My Cart';
import LogIn from './Components/LogIn/LogIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/addProducts',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/myCart',
        element:<MyCart></MyCart>
      },
      {
        path: '/login',
        element:<LogIn></LogIn>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
