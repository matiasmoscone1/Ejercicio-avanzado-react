import { useContext } from "react";
import { CountContext } from "./CountContextProvider";


const ComponentA = () => {

    const { count, dispatch } = useContext(CountContext);

    return(<>
    <span>{count}</span>
        <button onClick={() => dispatch({type: "increment"})}>Increment</button>
        <button onClick={() => dispatch({type: "decrement"})}>Decrement</button>
        <button onClick={() => dispatch({type: "reset"})}>Reset</button>
    </>)
}

export default ComponentA;

