
import  DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export function Card({customer,deleteCustomer }){
    return (
        <div className="card bg-info" style={{width :"18rem"}} >
        <div className="card-body">
            <h5 className="card-title"><span>#</span>{customer.id}</h5>
        </div>
       <img src={require("../Resources/"+customer.customerImage)} className="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">{customer.customerName}</h5>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><b><small>Contact number: </small></b>{customer.customerContact}</li>
            <li className="list-group-item"><b><small>Email Id: </small></b>{customer.customerEmail}</li>
            <li className="list-group-item"><b><small>Username: </small></b>{customer.username}</li>
        </ul>
        <div className="card-body">
            {/* 2. pass the data from route */}
            <Button component={Link} to={`/vinakitchen/update/${customer.id}`} variant="contained"  startIcon={<EditIcon />}  color="primary">EDIT</Button>    
            <Button className="m-2" variant="contained" color="error" startIcon={<DeleteIcon />} onClick={()=>deleteCustomer(customer.id)}>DELETE</Button>
        </div>
    </div>   
    );
}