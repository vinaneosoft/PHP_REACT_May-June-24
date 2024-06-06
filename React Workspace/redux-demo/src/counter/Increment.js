import {increment, incrementByAmount} from "../Reducers/counterSlice";
import { useDispatch, useSelector } from "react-redux";
export function Increment(){
    const count=useSelector((store)=>store.counter.value);
    const dispatch=useDispatch();
    return (
        <>
        <h4>Increment Component</h4>
        <b>{count}</b>
        <button onClick={()=>dispatch(increment())}>INCREMENT</button>
        <button onClick={()=>dispatch(incrementByAmount(5))}>INCREMENT BY PAYLOAD</button>
        </>
    );
}