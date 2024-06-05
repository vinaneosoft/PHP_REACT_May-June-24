import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login(){
    const navigate=useNavigate();
    
    let uname;
    let password;
    const userNode=useRef();
    const passNode=useRef();
    const paranode=useRef();

    const [errorMessage, setMessage]=useState("");
    function collectData(ev){
        ev.preventDefault();
        uname=userNode.current.value;
        password=passNode.current.value;
        loginCheck();
    }
    function loginCheck(){
        if(uname=="admin" && password=="admin123")
            navigate("/vinakitchen");
            
        else
            setMessage("Incorrect admin username or password...");
    }
    function getPara(){
        console.log(paranode.current);
        console.log(paranode.current.textContent);
    }   
    useEffect(()=>{
        console.log("re-rendered");
    });

    return (
        <section className="container w-50 bg-secondary">
        <h4>LOGIN FORM</h4>
        <b>{uname}</b>
       <b style={{color:"red"}}><small>{errorMessage}</small></b>
        <form onSubmit={collectData}>
            <div className="mb-3">
                <label htmlFor="uname" className="form-label">USERNAME</label>
                <input id="uname" name="username"  type="text" className="form-control" ref={userNode} ></input>
            </div>
            <div className="mb-3">
                <label htmlFor="pass" className="form-label">PASSWORD</label>
                <input id="pass" name="password" type="password" className="form-control"  ref={passNode}  ></input>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <p ref={paranode}>
            Welcome to neosoft
        </p>
        <button onClick={getPara}>CLICK</button>
       </section>
    );
}