import  {Button} from "@mui/material";
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
            <input className="m-2" type="search" placeholder="Enter search value" ref={searchNode}></input>
            <Button variant="contained" color="secondary" onClick={()=>searchCustomer(selectNode.current.value,searchNode.current.value)}>SEARCH</Button>
          </>
        );
    
}

