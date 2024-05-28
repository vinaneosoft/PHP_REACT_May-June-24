
import React from "react"; 
import './App.css';
import { Header } from "./myheader/Header";
import { Footer } from "./Footer/Footer";
import { Learning } from "./learning/Learning";
import { JSXExpressions } from "./learning/JSXExpressions";

function App() {
  return (
    <React.Fragment>  
        <Header></Header>
        <JSXExpressions></JSXExpressions>
        <Footer></Footer>
    </React.Fragment>  
  );
}

export default App;
