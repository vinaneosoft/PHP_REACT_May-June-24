import { useEffect, useState } from "react";
import { Card } from "./Card";
import { MyCustomer } from "./MyCustomer";
import { deleteCustomerById, getAllCustomers } from "../httpmodel/http";
import { SearchBar } from "../searchbar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import {fetchCustomers} from "../Redux/Reducers/CustomerSlice";
export function Customers(){
    const data=useSelector((state)=>state.customers.data); // if store data is updated it will fetch updated data atumatically
    const [customers, setCustomers]=useState(data);
    const dispatch=useDispatch();
    useEffect(()=>{  
        loadCustomers();
    }, []);
    
    function loadCustomers(){
        dispatch(fetchCustomers());
        //useSelector not giving updated data
        setCustomers(data);
    }
    function getCustomers(){
        setCustomers(data);
    }

    async function deleteCustomer(id){
        const reply=window.confirm("Do you really want to delete?");
        if(reply){
            const response=await deleteCustomerById(id);
            if(response.statusText=="OK")  {
                alert("customer deleted successfully....");
                loadCustomers();
            }
            else
                console.log("Something went wrong while deleting...");
        }
    }
    function searchCustomer(property, value){
        if(value!="" && customers!=null){
            const filters=customers.filter(customer=>customer[property].includes(value.trim()))
            if(filters.length!=0)
                setCustomers(filters)
            else
                alert("CUSTOMER NOT FOUND");
        }
    }
   let trElements;
   if(customers!=null)
    trElements=customers.map(customer=>
        <tr key={customer.id}>
            <td>{customer.id}</td>
            <td>{customer.customerName}</td>
            <td>{customer.customerContact}</td>
            <td>{customer.customerEmail}</td>
            <td>{customer.username}</td>
            <td>{customer.password}</td>
        </tr>);
    let cardElements;
    if(customers!=null)
         cardElements=customers.map(customer=><Card key={customer.id} customer={customer} deleteCustomer={deleteCustomer}></Card> ) 
    return(
        <>
       <h4>CUSTOMER DETAILS</h4>
    
       <SearchBar searchCustomer={searchCustomer}></SearchBar>
       <button type="button" className="btn btn-warning" onClick={getCustomers}> RESET</button>
        <section className="d-flex flex-wrap">
            { cardElements}
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