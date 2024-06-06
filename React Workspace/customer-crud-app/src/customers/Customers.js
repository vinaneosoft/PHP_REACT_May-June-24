import { useEffect, useState } from "react";
import { Card } from "./Card";
import { MyCustomer } from "./MyCustomer";
import { deleteCustomerById, getAllCustomers } from "../httpmodel/http";
import { SearchBar } from "../searchbar/SearchBar";

export function Customers(){
    useEffect(()=>{
        getCustomers();
        console.log("re rendered...");
    }, []);
    let  [customers, setCustomers]=useState([]);
    async function getCustomers(){
        let response= await getAllCustomers(); // we can take data from store
        if(response.statusText=="OK")
            setCustomers( response.data);
        else
            console.log("something went wrong while getting data.....");
    }
    async function deleteCustomer(id){
        const reply=window.confirm("Do you really want to delete?");
        if(reply){
            const response=await deleteCustomerById(id);
            if(response.statusText=="OK")  {
                alert("customer deleted successfully....");
                getCustomers();
            }
            else
                console.log("Something went wrong while deleting...");
        }
    }
    function searchCustomer(property, value){
        console.log(property);
       console.log(value);
        // no backend logic
        // filter logic on array
        if(value!=""){
            const filters=customers.filter(customer=>customer[property].includes(value.trim()))
            if(filters.length!=0)
                setCustomers(filters);
            else
                alert("CUSTOMER NOT FOUND");
        }
    }
   const trElements=customers.map(customer=>
        <tr key={customer.id}>
            <td>{customer.id}</td>
            <td>{customer.customerName}</td>
            <td>{customer.customerContact}</td>
            <td>{customer.customerEmail}</td>
            <td>{customer.username}</td>
            <td>{customer.password}</td>
        </tr>);

    const cardElements=customers.map(customer=><Card key={customer.id} customer={customer} deleteCustomer={deleteCustomer}></Card> ) 
    return(
        <>
       <h4>CUSTOMER DETAILS</h4>
       <SearchBar searchCustomer={searchCustomer}></SearchBar>
        <section className="d-flex flex-wrap">
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