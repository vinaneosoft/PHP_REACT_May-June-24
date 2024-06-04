import { useEffect, useState } from "react";
import { Card } from "./Card";
import { MyCustomer } from "./MyCustomer";
import { getAllCustomers } from "../httpmodel/http";

export function Customers(){
    useEffect(()=>{
        getCustomers();
        console.log("re rendered...");
    }, []);
    let  [customers, setCustomers]=useState([]);
    async function getCustomers(){
        let data= await getAllCustomers();
        setCustomers(data);
    }

   const trElements=customers.map(customer=>
        <tr key={customer.customerId}>
            <td>{customer.customerId}</td>
            <td>{customer.customerName}</td>
            <td>{customer.customerContact}</td>
            <td>{customer.customerEmail}</td>
            <td>{customer.username}</td>
            <td>{customer.password}</td>
        </tr>);

    const cardElements=customers.map(customer=><Card key={customer.customerId} customer={customer}></Card> ) 
    return(
        <>
       <h4>CUSTOMER DETAILS</h4>
        <section className="d-flex">
            {cardElements}
        </section>

        <hr></hr>
        
        <table className="table table-hover">
            <thead>
                <tr><th>ID</th><th>NAME</th><th>CONTACT</th><th>EMAIL ID</th><th>USERNAME</th><th>PASSWORD</th></tr>
            </thead>
            <tbody>
                {trElements}
            </tbody>
        </table>
        </>
    );
}