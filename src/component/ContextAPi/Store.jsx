import { createContext } from "react";

export const CreateDataContext = createContext()

export const DataProvider = ({children})=>{
    const myName = "Sonu"
    const myAge = 23
    return (
        <CreateDataContext.Provider value={{myName,myAge}}>
            {children}
        </CreateDataContext.Provider>
    )
}