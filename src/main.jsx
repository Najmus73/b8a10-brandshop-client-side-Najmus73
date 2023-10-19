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
import Products from './Components/Products/Porducts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element:<Home></Home>,
        loader: () => fetch('/data.json')
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
        path: '/products/:id',
        element:<Products></Products>
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
