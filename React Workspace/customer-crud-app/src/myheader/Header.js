
import { Navbar } from '../Navbar/Navbar';
import './Header.css';
export function Header(){
    return(
        <header className="myHeader">
                <h1 className="text-success">CUSTOMER CRUD PROJECT</h1>
                <Navbar></Navbar>
        </header>
    );
}