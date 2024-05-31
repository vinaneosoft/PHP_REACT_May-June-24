import { useContext, useState } from "react";
import { MyContext } from "../App";

export function NonvegMenus(props){

    
    const [styleObj, setStyle]=useState(useContext(MyContext));
    console.log(styleObj);

    const nonvegMenus=["Surmai Fish Fry", "Chicken Curry","Mutton Fry", "Egg Masala", "Chicken Bhuna"]
    const liElements=nonvegMenus.map((ele,i)=><li key={i}>{ele}</li>);
    return(
        <>
            <h4 style={styleObj}>{props.nvheading}</h4>
            <ol>
                {liElements}
            </ol>
        </>
    );
}