// u can declare javascript variables here : var, let, const
import  dish  from "../Resources/kadhaipaneer.jpg";


/* relative path to public folder not allowed  : either u keeps resources in src or
extract publc path from  "process.env.PUBLIC_URL" */
export function Learning(){

    // u can declare javascript variables here : var, let , const
    const subHeading="customer operations"
    const imageObj={
        imgPath:"https://www.funfoodfrolic.com/wp-content/uploads/2020/12/Kadhai-Paneer-Thumbnail-1170x1170.jpg",
        message:"Paneer Kadhai",
        height:300,
        width:400  
    }
    const imageObj2={
        imgPath:process.env.PUBLIC_URL+"/kadhaipaneer.jpg",
        message:"Paneer Kadhai",
        height:300,
        width:400  
    }
    const imageObj3={
        imgPath:dish,
        message:"Paneer Kadhai",
        height:300,
        width:400  
    }
    const imageObj4={
        imgPath:require('../Resources/kadhaipaneer.jpg'),
        message:"Paneer Kadhai Dish",
        height:300,
        width:400  
    }
    return (
    <div className="container">
        <h4>{subHeading}</h4> {/*Data binding*/}
        <figure>
            <img src="https://www.funfoodfrolic.com/wp-content/uploads/2020/12/Kadhai-Paneer-Thumbnail-1170x1170.jpg" alt="kadhai paneer" height="400" width="500"></img>
            <figcaption>Kadhai Paneer</figcaption>
            <img src={imageObj.imgPath} alt={imageObj.message} height={imageObj.height} width={imageObj.width}></img>
            <figcaption>{imageObj.message}</figcaption>
            <img src={imageObj2.imgPath} alt={imageObj2.message} height={imageObj2.height} width={imageObj2.width}></img>
            <figcaption>{imageObj2.message}</figcaption>
            <img src={imageObj3.imgPath} alt={imageObj3.message} height={imageObj3.height} width={imageObj3.width}></img>
            <figcaption>{imageObj3.message}</figcaption>
            <img src={require("../Resources/kadhaipaneer.jpg")} alt={imageObj3.message} height={imageObj3.height} width={imageObj3.width}></img>
            <figcaption>{imageObj3.message}</figcaption>
            <img src={imageObj4.imgPath} alt={imageObj4.message} height={imageObj4.height} width={imageObj4.width}></img>
            <figcaption>{imageObj4.message}</figcaption>
        </figure>
     </div>
    );
}