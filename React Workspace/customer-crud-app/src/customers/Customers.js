import { MyCustomer } from "./MyCustomer";

export function Customers(){
    const customers=[
        new MyCustomer(111,"Poonam",9898989898,"poo@gmail.com","poo","poo@123"),
        new MyCustomer(121,"Kalpesh",8898989898,"kalpesh@gmail.com","kalpesh","kalp@123"),
        new MyCustomer(131,"Kiran",9898789898,"kiran@gmail.com","kiran","ki@123"),
  /*       new MyCustomer() */
    ]
   const trElements=customers.map(customer=>
        <tr key={customer.customerId}>
            <td>{customer.customerId}</td>
            <td>{customer.customerName}</td>
            <td>{customer.customerContact}</td>
            <td>{customer.customerEmail}</td>
            <td>{customer.username}</td>
            <td>{customer.password}</td>
        </tr>);

    const cardElements=customers.map(customer=> 
    <div key={customer.customerId} className="card bg-info" style={{width :"18rem"}} >
        <div className="card-body">
            <h5 className="card-title"><span>#</span>{customer.customerId}</h5>
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
            <button className="btn btn-info">EDIT</button>
            <button className="btn btn-danger">DELETE</button>
        </div>
    </div>   
) 
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