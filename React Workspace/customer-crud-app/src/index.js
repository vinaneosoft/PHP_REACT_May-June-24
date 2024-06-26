import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import { Login } from './login/Login';
import { Customers } from './customers/Customers';
import { Register } from './register/Register';
import { Home } from './home/Home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Provider } from 'react-redux';
import store from "./Redux/Store/store"
// to define routes for every component
const routerArray=[
  {
    path:"/",
    element:<Login></Login>
  },
  {
    path:"/vinakitchen",
    element:<App></App>,
    children:[
      {
        path:'/vinakitchen',
        loader: () => redirect('home'),
      },
      {
        path:"home", // userdefined
        element:<Home></Home>
      },
      {
        path:"customers", // userdefined
        element:<Customers></Customers>
      },
      {
        path:"register", // new registration
        element:<Register></Register>
      },
      {
        path:"login",
        element:<Login></Login>
      },
      {
        //1. register our route
        /* complex values can not be passed via route */
        path:"update/:custid", // updating details,  register any parameter on route to hold value
        element:<Register></Register>,
      }
    ]
  }
];



// pass array to get router object
const router=createBrowserRouter(routerArray);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
