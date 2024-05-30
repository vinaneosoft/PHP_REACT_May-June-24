import { useEffect, useState } from "react";
import { MyCustomer } from "../customers/MyCustomer";

export function Register(){
    const [customer, setCustomer]=useState(new MyCustomer());
    function changeCustomer(ev){
      //  console.log(ev.target.value);
      //  console.log(ev.target.name);
        setCustomer({...customer, [ev.target.name]:ev.target.value})
    }
    useEffect(()=>{
        console.log(customer);
    });
    return (
        <>
        <h4>Customer Registration Form</h4>
        <form>
            <div className="mb-3">
                <label htmlFor="customerId" className="form-label">ID</label>
                <input id="customerId" name="customerId" type="number" className="form-control" value={customer.customerId} onChange={changeCustomer}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="customerName" className="form-label">NAME</label>
                <input id="customerName" name="customerName" type="text" className="form-control" value={customer.customerName} onChange={changeCustomer} ></input>
            </div>
            <div className="mb-3">
                <label htmlFor="customerContact" className="form-label">CONTACT</label>
                <input id="customerContact" name="customerContact" type="number" className="form-control" value={customer.customerContact} onChange={changeCustomer}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="customerEmail" className="form-label">EMAIL</label>
                <input id="customerEmail" name="customerEmail"  type="email" className="form-control" value={customer.customerEmail} onChange={changeCustomer}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">USERNAME</label>
                <input id="username" name="username" type="text" className="form-control" value={customer.username} onChange={changeCustomer}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">PASSWORD</label>
                <input id="password" name="password" type="password" className="form-control" value={customer.password} onChange={changeCustomer}></input>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </>
    );
}