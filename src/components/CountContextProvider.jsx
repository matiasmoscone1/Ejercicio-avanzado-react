import { useReducer } from "react";
import { createContext } from "react";
import reducer from "./reducer";

export const CountContext = createContext();

export const CountContextProvider = ({ children }) => {

    const initialState = 0;
    const [count, dispatch] = useReducer(reducer, initialState);

    return(
        <CountContext.Provider value={{ count, dispatch }}>
            { children }
        </CountContext.Provider>
    );

}

