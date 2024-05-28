import { useState } from "react";

let age=45;
let message=""
if(age>=18)
    message="Welcome for voting....";
else    
    message="Sorry!! you are not allowed for voting";

export function JSXExpressions(){
   // hook 
    return (
        <>
        <b>{age}</b>
        <p>{message}</p>
        <p>{age>=18?"Welcome for voting....":"Sorry!! you are not allowed for voting"}</p>
        <p>{age>=18 && "Welcome for voting"}</p>
        </>
    );
} 