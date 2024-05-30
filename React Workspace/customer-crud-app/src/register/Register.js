import { useState } from "react";

export function Register(){
    const [customerId, setId]=useState(0);
    function changeCustomerId(ev){
       // console.log(ev.target.value);
        setId(ev.target.value);
    }
    return (
        <>
        <h4>Customer Registration Form</h4>
        <form>
            <div className="mb-3">
                <label htmlFor="customerId" className="form-label">Customer Id</label>
                <input id="customerId" type="number" className="form-control" value={customerId} onChange={changeCustomerId}></input>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </>
    );
}