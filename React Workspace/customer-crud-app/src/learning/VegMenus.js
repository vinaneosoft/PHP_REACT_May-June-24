import { useContext } from "react";
import { MyContext } from "../App";

export function VegMenus({vheading, getMessage}){
    const data="WELCOME TO Vina's Kitchen. Here we are performing Customer Crud operations";
    const styleObj=useContext(MyContext);

    const vegMenus=["Kadhai Paneer", "Mix Veg","Matar Paneer", "Paneer Makhani"]
    const liElements=vegMenus.filter(ele=>ele.toLowerCase().includes("paneer")).map((ele,i)=><li key={i}>{ele}</li>);
   
    return(
        <>
            <h4 style={styleObj}>{vheading}</h4>
            <ol>{liElements}</ol>
            <p>
                <button onClick={()=> getMessage(data)}>CALL PARENT METHOD</button>
            </p>
        </>
    );
}