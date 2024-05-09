import { createContext, useState } from "react";

export const DarkContext = createContext()

export const DarkProvider = ({children}) => {
    const [dark, setDark] = useState('true')

    return (
        <DarkContext.Provider value={{dark, setDark}}>
            {children}
        </DarkContext.Provider>
    )
}