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
import ErrorPage from './Components/ErrorPage/ErrorPage';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Update from './Components/Update/Update';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage> ,
    children: [
      {
        path: '/',
        element:<Home></Home>,
        loader: () => fetch('https://automotive-selling-site-server-o01mt5s8s.vercel.app/product')
      },
      {
        path: '/addProducts',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/myCart',
        element:<MyCart></MyCart>,
        loader: () => fetch('https://automotive-selling-site-server-o01mt5s8s.vercel.app/product')

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
        path:'Cars/:brandName',
        element:<Products></Products>,
        loader: () => fetch('https://automotive-selling-site-server-o01mt5s8s.vercel.app/product')
      },
      {
        path:'/:_id',
        element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: () => fetch('https://automotive-selling-site-server-o01mt5s8s.vercel.app/product')
      },
      {
        path: '/update/:_id',
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params}) => fetch(`https://automotive-selling-site-server-o01mt5s8s.vercel.app/product/${params._id}`)
        
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
