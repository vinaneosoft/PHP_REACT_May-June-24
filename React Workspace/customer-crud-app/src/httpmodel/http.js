import axios from "axios";


export async function getAllCustomers(){
    // get is used to send get request to server 
    const response=await axios.get("http://localhost:3500/customerrecords");
    if(response.statusText=="OK")
        return response.data;
    else
        console.log("something went wrong.....");
}   

export async function getCustomerById(){

}

export async function addCustomer(customer){
    const response =await axios.post("http://localhost:3500/customerrecords",customer);
    console.log(response);
}