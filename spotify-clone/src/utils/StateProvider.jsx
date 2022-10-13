import { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = ({children,initialState,reducer}) => (
    <StateContext.Provider value={useReducer(initialState,reducer)}>
        {children}
    </StateContext.Provider>

);
//we will use spotify API and context API for state management

export const useStateProvider = () => useContext (StateContext)