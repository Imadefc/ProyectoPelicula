import { createContext, useState } from "react";

export const Idcontext = createContext() ;
export function IdProvider({ children }){

    const [ selectedMovie, setSelectedMovie ] = useState (null);

    return (
        <>
         <Idcontext.Provider value={{ selectedMovie, setSelectedMovie }}> { children } </Idcontext.Provider>
        </>
       
    )
}