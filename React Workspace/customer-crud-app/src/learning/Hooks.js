import { useRef } from "react";

export function Hooks(){
    /*The useRef Hook allows you to persist values between renders.*/
    let counter2=0;
    let counter=useRef(0);
    //console.log(counter);
    console.log(counter.current);
    function increment(){
        counter.current++;
        console.log("Counter:"+counter.current);
        counter2++;
        console.log("Counter2:"+counter2);
    }
    return (
        <>
        <h4>USE REF HOOK</h4>
        <i>{counter2}</i><br></br>
        <b>{counter.current}</b>
        <button onClick={increment}>INCREMENT</button>
        </>
    );
   
}