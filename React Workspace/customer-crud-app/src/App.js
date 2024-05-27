
import React from "react"; 
import './App.css';
import { Header } from "./myheader/Header";
import { Footer } from "./Footer/Footer";
import { Learning } from "./learning/Learning";

function App() {
  return (
    <React.Fragment>  
        <Header></Header>
        <Learning></Learning>
        <Footer></Footer>
    </React.Fragment>  
  );
}

export default App;
