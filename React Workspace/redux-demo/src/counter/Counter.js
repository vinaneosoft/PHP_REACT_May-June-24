import { useDispatch, useSelector } from "react-redux";
import {increment, decrement, incrementByAmount} from "../Reducers/counterSlice";
import { Increment } from "./Increment";
import { Decrement } from "./Decrement";

export function Counter(){

    const count=useSelector((store)=>store.counter.value);
    const dispatch=useDispatch();
    return (
        <>
            <h3 className="text-center">{count}</h3>
        <div>
        <Increment></Increment>
        <Decrement></Decrement>
        </div>
        </>

    );
}