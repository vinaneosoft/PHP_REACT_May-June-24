import { Component, useRef } from "react";

export function SearchBar({searchCustomer}){
        const searchNode=useRef();
        return (
           <>
            <input className="m-2" type="search" placeholder="Enter customer id" ref={searchNode}></input>
            <button className="btn btn-outline-success" type="submit" onClick={()=>searchCustomer(searchNode.current.value)}>Search</button>
          </>
        );
    
}