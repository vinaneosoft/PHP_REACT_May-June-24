

export function VegMenus({vheading}){
    const vegMenus=["Kadhai Paneer", "Mix Veg","Matar Paneer", "Paneer Makhani"]
    const liElements=vegMenus.filter(ele=>ele.toLowerCase().includes("paneer")).map((ele,i)=><li key={i}>{ele}</li>);
   
    return(
        <>
            <h4>{vheading}</h4>
            <ol>{liElements}</ol>
        </>
    );
}