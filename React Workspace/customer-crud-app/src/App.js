
import React from "react"; 
import './App.css';
import { Header } from "./myheader/Header";
import { Footer } from "./Footer/Footer";
import { Learning } from "./learning/Learning";
import { JSXExpressions } from "./learning/JSXExpressions";
import { Customers } from "./customers/Customers";
import { Register } from "./register/Register";
import { Login } from "./login/Login";
import { Hooks } from "./learning/Hooks";

function App() {
  return (
    <React.Fragment>  
        <Header></Header>
        <Hooks></Hooks>
      {/*   <Login></Login>
        <Register></Register> */}
        {/* <Customers></Customers>
        <JSXExpressions></JSXExpressions> */}
        <Footer></Footer>
    </React.Fragment>  
  );
}

export default App;
