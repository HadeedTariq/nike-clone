import { createContext, useContext, useReducer } from "react";

const Context=createContext()

export const ContextProvider=({children,state,reducer})=>{
    return(
        <Context.Provider value={useReducer(reducer,state)}>
            {children}
        </Context.Provider>
    )
}
export const useStore=()=>useContext(Context)