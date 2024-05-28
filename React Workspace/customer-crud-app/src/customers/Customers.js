import { MyCustomer } from "./MyCustomer";

export function Customers(){

    const customers=[
        new MyCustomer(111,"Poonam",9898989898,"poo@gmail.com","poo","poo@123"),
        new MyCustomer(121,"Kalpesh",8898989898,"kalpesh@gmail.com","kalpesh","kalp@123"),
        new MyCustomer(131,"Kiran",9898789898,"kiran@gmail.com","kiran","ki@123")
    ]
   const trElements=customers.map(customer=>
        <tr key={customer.customerId}>
            <td>{customer.customerId}</td>
            <td>{customer.customerName}</td>
            <td>{customer.customerContact}</td>
            <td>{customer.customerEmail}</td>
            <td>{customer.username}</td>
            <td>{customer.password}</td>
        </tr>)
    return(
        <>
        <h4>CUSTOMER DETAILS</h4>
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