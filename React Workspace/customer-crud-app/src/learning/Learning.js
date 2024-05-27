// u can declare javascript variables here : var, let, const
import { useEffect, useState } from "react";
import  dish  from "../Resources/kadhaipaneer.jpg";
import  './Learning.css';

/* relative path to public folder not allowed  : either u keeps resources in src or
extract publc path from  "process.env.PUBLIC_URL" */
export function Learning(){

    // u can declare javascript variables here : var, let , const
    let subHeading="customer operations"
    const imageObj={
        imgPath:"https://www.funfoodfrolic.com/wp-content/uploads/2020/12/Kadhai-Paneer-Thumbnail-1170x1170.jpg",
        message:"Paneer Kadhai",
        height:100,
        width:100  
    }
    const imageObj2={
        imgPath:process.env.PUBLIC_URL+"/kadhaipaneer.jpg",
        message:"Paneer Kadhai",
        height:100,
        width:100  
    }
    const imageObj3={
        imgPath:dish,
        message:"Paneer Kadhai",
        height:100,
        width:100  
    }
    const imageObj4={
        imgPath:require('../Resources/kadhaipaneer.jpg'),
        message:"Paneer Kadhai Dish",
        height:100,
        width:100  
    }

    // react style
    const styleObj={
        height:"100px",
        width:"100px",
        border:"5px dashed blue",
        backgroundColor:"red"
    }

    const styleArray=['rounded-circle', 'border','border-5', "border-danger"]
    const classes=styleArray.join(" ");
/* message is variable available in component,  state of message ="" 
 state change in variable  : component re rendered*/

  /* if u want to make a state change in variable we have to use hook in react
  useState */
   const [message, changeState]=useState("");

    function getMessage(){
        //console.log("in function...");
       // message="Welcome to my online Kitchen" // this wont work in react
        changeState("Welcome to my online Kitchen");
       // return message;
    }

    // after rendering done : we want to do some extra operations : back end connectivity
    // use of those variable which to be used after component rendering

    useEffect(()=>{
       console.log("component rendering done....");
    });

    function test(value){
        console.log(value);
    }

    return (
    <div className="container">
        <h4>{subHeading}</h4> {/*Data binding*/}
        {/* Attribute Binding */}
        <figure>
            <img src="https://www.funfoodfrolic.com/wp-content/uploads/2020/12/Kadhai-Paneer-Thumbnail-1170x1170.jpg" alt="kadhai paneer" height="400" width="500"></img>
            <figcaption>Kadhai Paneer</figcaption>
            <img src={imageObj.imgPath} alt={imageObj.message} height={imageObj.height} width={imageObj.width}></img>
            <figcaption>{imageObj.message}</figcaption>
            <img src={imageObj2.imgPath} alt={imageObj2.message} height={imageObj2.height} width={imageObj2.width}></img>
            <figcaption>{imageObj2.message}</figcaption>
            <img src={imageObj3.imgPath} alt={imageObj3.message} height={imageObj3.height} width={imageObj3.width}></img>
            <figcaption>{imageObj3.message}</figcaption>
            <img src={require("../Resources/kadhaipaneer.jpg")} alt={imageObj3.message} height={imageObj3.height} width={imageObj3.width}></img>
            <figcaption>{imageObj3.message}</figcaption>
            <img src={imageObj4.imgPath} alt={imageObj4.message} height={imageObj4.height} width={imageObj4.width}></img>
            <figcaption>{imageObj4.message}</figcaption>
            <img style={styleObj} src={imageObj4.imgPath} alt="dish"></img>
            <hr></hr>
            <img className={classes} src={imageObj4.imgPath} alt="dish" height={imageObj4.height} width={imageObj4.width}></img>
        </figure>
        <hr></hr>
        {/* <b>{getMessage()}</b> */}
        <button className="btn btn-info" onClick={getMessage}>MESSAGE</button>
       <b>{message}</b>
       <button className="btn btn-warning" onClick={()=>test(45)}>MESSAGE</button>
       { /* on button click we will apply style to any element*/}
     </div>
    );
}