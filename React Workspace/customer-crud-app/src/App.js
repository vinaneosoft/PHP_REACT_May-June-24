
import React from "react"; 
import './App.css';
import { Header } from "./myheader/Header";
import { Footer } from "./Footer/Footer";
import { Learning } from "./learning/Learning";
import { JSXExpressions } from "./learning/JSXExpressions";
import { Customers } from "./customers/Customers";
import { Register } from "./register/Register";
import { Login } from "./login/Login";


export const MyContext=React.createContext();



function App() {
  let bgColor="yellow";
  return (
    <React.Fragment>  
      <MyContext.Provider value={bgColor}>
          <Header></Header>
          {/*  <Hooks></Hooks> */}
          {/*  <Login></Login> */}
          {/*  <Register></Register> */}
          {/* <Customers></Customers>*/}
          <JSXExpressions></JSXExpressions> 
          <Footer></Footer>
      </MyContext.Provider>
    </React.Fragment>  
  );
}

export default App;
