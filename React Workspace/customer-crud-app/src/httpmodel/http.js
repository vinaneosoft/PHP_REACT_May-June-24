import axios from "axios";

const url="http://localhost:3500/customerrecords"

export async function getAllCustomers(){
    // get is used to send get request to server 
    const response=await axios.get(url);
    return response;
}   

export async function getCustomerById(id){
    const response=await axios.get(url+"/"+id);
    return response;
}
export async function deleteCustomerById(id){
    const response=axios.delete(url+"/"+id);
    return response;
}
export async function updateCustomerById(customer){
    const response=await axios.put(url+"/"+customer.id,customer)
    return response; 
}

export async function addCustomer(customer){
    const response =await axios.post(url,customer);
    return response;
}


