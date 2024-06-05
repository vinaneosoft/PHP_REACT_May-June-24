import { useEffect, useState } from "react";
import { MyCustomer } from "../customers/MyCustomer";
import { useNavigate, useParams } from "react-router-dom";
import { addCustomer, getCustomerById, updateCustomerById } from "../httpmodel/http";

export function Register(){
    const navigate=useNavigate();
    const [customer, setCustomer]=useState(new MyCustomer());
    const [label, setLabel]=useState("REGISTER");

   // const test=useState();
    function changeCustomer(ev){
      //  console.log(ev.target.value);
      //  console.log(ev.target.name);
        setCustomer({...customer, [ev.target.name]:ev.target.value})
    }
    useEffect(()=>{
       // console.log("re rendered...");
        searchCustomer();
        return ()=>{
           // console.log("Clean up....");
        }
       
    },[]);

    //3. extracting values from route
    const { custid } =useParams();// do object destructuring in this line
    //console.log("id "+custid);
    // further logic will be completed in react http

    function collectData(e){
        e.preventDefault();
    //   console.log(customer);
       if(custid==undefined)
        createCustomer();
       else
        updateCustomer();
    }
    async function createCustomer(){
        customer.customerImage="sampleprofilepic.jpg";
        // console.log(customer);
         const response=await addCustomer(customer);
         if(response.statusText=="Created"){
                 alert("Customer registered successfully.....");
                 navigate("/vinakitchen/customers");
         }
         else
             console.log("Something went wrong while adding.....");
    }
    async function updateCustomer(){
          const response=  await updateCustomerById(customer);
          if(response.statusText=="OK"){
            alert("Customer updated successfully.....");
            navigate("/vinakitchen/customers");
    }
    else
        console.log("Something went wrong while updating.....");
    }
    async function  searchCustomer(){
       // console.log("in search function");
        if(custid!=undefined)
            {
               const response=await getCustomerById(custid);
                if(response.statusText=="OK") {
                    setCustomer(response.data);
                    setLabel("UPDATE");
                }
                else
                    console.log("Something went wrong while searching....");
            }
    }
    return (
        <section className="container w-50 bg-secondary">
        <h4>CUSTOMER {label} FORM</h4>
        <form onSubmit={collectData}>
           {/*  <div className="mb-3">
                <label htmlFor="customerId" className="form-label">ID</label>
                <input id="customerId" name="id" type="number" className="form-control" value={customer.id} onChange={changeCustomer}></input>
            </div> */}
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
                <input id="username" name="username" type="text" className="form-control" value={customer.username} onChange={changeCustomer} readOnly={label=="UPDATE"}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">PASSWORD</label>
                <input id="password" name="password" type="password" className="form-control" value={customer.password} onChange={changeCustomer} readOnly={label=="UPDATE"}></input>
            </div>
            <button type="submit" className="btn btn-primary m-2">{label}</button>
            <button type="submit" className="btn btn-primary">RESET</button>
        </form>
        </section>
    );
}