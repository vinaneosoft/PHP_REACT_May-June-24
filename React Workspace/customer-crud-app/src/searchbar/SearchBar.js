import { useRef } from "react";

export function SearchBar({searchCustomer}){
        const searchNode=useRef();
        const selectNode=useRef();
        return (
           <>
           <select ref={selectNode}>
              <option value="id">ID</option>
              <option value="customerContact">CONTACT</option>
           </select>
            <input className="m-2" type="search" placeholder="Enter customer id" ref={searchNode}></input>
            <button className="btn btn-outline-success" type="submit" onClick={()=>searchCustomer(selectNode.current.value,searchNode.current.value)}>Search</button>
          </>
        );
    
}