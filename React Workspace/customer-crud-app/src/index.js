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
        path:"register",
        element:<Register></Register>
      },
      {
        path:"login",
        element:<Login></Login>
      }
    ]
  }
];



// pass array to get router object
const router=createBrowserRouter(routerArray);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
