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
import Register from './Components/Register/Register';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Products from './Components/Products/Products';
import HomeCard from './Components/HomeCard/HomeCard';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
        loader: () => fetch('http://localhost:5000/product')
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
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path:'/:brandName',
        element:<Products></Products>,
        loader: () => fetch('http://localhost:5000/product')
      }      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
        <RouterProvider router={router} />
     </AuthProvider>
  </React.StrictMode>,
)
