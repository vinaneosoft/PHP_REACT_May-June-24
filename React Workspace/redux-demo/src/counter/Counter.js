import { useDispatch, useSelector } from "react-redux";
import {increment, decrement, incrementByAmount} from "../Reducers/counterSlice";

export function Counter(){

    const count=useSelector((store)=>store.counter.value);
    const dispatch=useDispatch();
    return (
        <>
             <h3 className="text-center">{count}</h3>
        <div>
           
        <button onClick={()=>dispatch(increment())}>INCREMENT</button>
        <button onClick={()=>dispatch(decrement())} >DECREMENT</button>
        <button onClick={()=>dispatch(incrementByAmount(5))}>INCREMENT BY PAYLOAD</button>
        </div>
        </>

    );
}