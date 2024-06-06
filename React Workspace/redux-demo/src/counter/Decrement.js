import { useDispatch, useSelector } from "react-redux";
import {decrement} from "../Reducers/counterSlice";
export function Decrement(){
    const count=useSelector((store)=>store.counter.value);
    const dispatch=useDispatch();
    return(
        <>
        <h4>Decrement Component</h4>
        <b>{count}</b>
        <button onClick={()=>dispatch(decrement())} >DECREMENT</button>
        </>
        
    );
}