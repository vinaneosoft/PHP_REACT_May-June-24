
import React, { useState } from "react"; 
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
 
  const [styleObj, setStyle]=useState({
    border:'4px double green',
    backgroundColor:"orange"
  })

   setTimeout(()=>{
      setStyle({...styleObj, backgroundColor:'purple'});
   },3000);
  return (
    <React.Fragment>  
      <MyContext.Provider value={styleObj}>
          <Header></Header>

          <Footer></Footer>
      </MyContext.Provider>
    </React.Fragment>  
  );
}

export default App;
