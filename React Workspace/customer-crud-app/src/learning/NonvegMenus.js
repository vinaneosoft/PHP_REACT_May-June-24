export function NonvegMenus(){
    const nonvegMenus=["Surmai Fish Fry", "Chicken Curry","Mutton Fry", "Egg Masala", "Chicken Bhuna"]
    const liElements=nonvegMenus.map((ele,i)=><li key={i}>{ele}</li>);
    return(
        <>
            <h4>NON VEG MAIN COURSE</h4>
            <ol>
                {liElements}
            </ol>
        </>
    );
}