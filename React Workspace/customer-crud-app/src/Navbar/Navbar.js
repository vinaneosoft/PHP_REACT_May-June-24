import { Link } from "react-router-dom";



export function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="home">Vina's Kitchen</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="home">Home</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="customers">Show Customers</Link>
        </li>
      </ul>
        
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link" to="register">Register</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="login">Login</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
);
}