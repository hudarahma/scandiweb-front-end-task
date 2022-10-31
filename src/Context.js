
import React, { createContext, useState } from 'react';


export const MyContext = createContext();


const ContextProvider = ({ children }) => {

    
    const [ categoryName, setCategoryName] = useState();

    
    

    const initialState = { categoryName, setCategoryName }




    return ( 
        <MyContext.Provider value={initialState}>
            {children}
        </MyContext.Provider>
    )
}


export default ContextProvider;