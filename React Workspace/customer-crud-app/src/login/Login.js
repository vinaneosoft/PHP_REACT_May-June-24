import { useEffect, useRef } from "react";

export function Login(){
    const inputnode=useRef();
    const paranode=useRef();
    function collectData(ev){
        ev.preventDefault();
        console.log(inputnode.current);
        console.log(inputnode.current.value);
        console.log(inputnode.current.type);
    }
    function getPara(){
        console.log(paranode.current);
        console.log(paranode.current.textContent);
    }   
    useEffect(()=>{
        console.log("re-rendered");
    });
    return (
        <>
        <h4>LOGIN FORM</h4>
        <form onSubmit={collectData}>
            <div className="mb-3">
                <label htmlFor="uname" className="form-label">USERNAME</label>
                <input id="uname" name="username"  type="text" className="form-control" ref={inputnode} ></input>
            </div>
            <div className="mb-3">
                <label htmlFor="pass" className="form-label">PASSWORD</label>
                <input id="pass" name="password" type="password" className="form-control" ></input>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <p ref={paranode}>
            Welcome to neosoft
        </p>
        <button onClick={getPara}>CLICK</button>
        </>
    );
}