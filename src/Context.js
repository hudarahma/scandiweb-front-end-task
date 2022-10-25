
import React, { createContext } from 'react';


export const MyContext = createContext();


const ContextProvider = ({ children }) => {

    


    
    

    const initialState = {  }




    return ( 
        <MyContext.Provider value={initialState}>
            {children}
        </MyContext.Provider>
    )
}


export default ContextProvider;