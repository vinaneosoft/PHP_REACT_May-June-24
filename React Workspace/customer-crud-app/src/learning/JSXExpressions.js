import { useState } from "react";
import { VegMenus } from "./VegMenus";
import { NonvegMenus } from "./NonvegMenus";

let age=45;
let message=""
if(age>=18)
    message="Welcome for voting....";
else    
    message="Sorry!! you are not allowed for voting";

let veg=false;


export function JSXExpressions(){
   // hook 
    return (
        <>
        <b>{age}</b>
        <p>{message}</p>
        <p>{age>=18?"Welcome for voting....":"Sorry!! you are not allowed for voting"}</p>
        <p>{age>=18 && "Welcome for voting"}</p>
        <hr></hr>
        <div>
            {veg==true ? <VegMenus></VegMenus> : <><VegMenus></VegMenus><NonvegMenus></NonvegMenus></>}
        </div>
        </>
    );
} 