import { useEffect, useRef } from "react";

export function Login(){
    let uname="ABC";
    const inputnode=useRef();
    const paranode=useRef();
    function collectData(ev){
        ev.preventDefault();
       // console.log(inputnode.current);
      //  console.log(inputnode.current.value);
      //  console.log(inputnode.current.type);
        console.log(uname);
        uname=inputnode.current.value;
        console.log(uname); // use this internally
    }
    function getPara(){
        console.log(paranode.current);
        console.log(inputnode.current);
        console.log(paranode.current.textContent);
    }   
    useEffect(()=>{
        console.log("re-rendered");
    });
    return (
        <>
        <h4>LOGIN FORM</h4>
        <b>{uname}</b>
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