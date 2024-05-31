import { useContext } from "react";
import { MyContext } from "../App";

export function NonvegMenus(props){

    const data=useContext(MyContext);
    console.log(data);
    
    const nonvegMenus=["Surmai Fish Fry", "Chicken Curry","Mutton Fry", "Egg Masala", "Chicken Bhuna"]
    const liElements=nonvegMenus.map((ele,i)=><li key={i}>{ele}</li>);
    return(
        <>
            <h4>{props.nvheading}</h4>
            <ol>
                {liElements}
            </ol>
        </>
    );
}