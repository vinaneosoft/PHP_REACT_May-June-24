export function Card({customer}){
    return (
        <div className="card bg-info" style={{width :"18rem"}} >
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
    );
}