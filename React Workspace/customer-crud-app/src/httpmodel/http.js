import axios from "axios";


export async function getAllCustomers(){
    // get is used to send get request to server 
    const response=await axios.get("http://localhost:3500/customers");
    console.log(response);
}   

export async function getCustomerById(){

}

export async function addCustomer(){

}