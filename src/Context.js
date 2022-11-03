
import React, { createContext, useState } from 'react';


export const MyContext = createContext();


const ContextProvider = ({ children }) => {

    
    const [ categoryName, setCategoryName] = useState();
    const [ productPrice, setProductPrice ] = useState('');
    const [ currency, setCurrency ] = useState('$');
    // const [ prodcutBrand, setProductBrand ] = useState('');
    // const [ productName , setProductName ] = useState('');
    // const [ atributesName, setAtributesName ] = useState('');
    // const [ selectedAttribut, setSelectedAttributes ] = useState('');

    // let addToCardProduct = [{
    //     prodcutBrand,
    //     productName,
    //     atributesName,
    //     selectedAttribut,


    // }];

    const handleChange = (e) => { 
        setCurrency(e.target.value);
        console.log(e.target.value);
    }
    

    const initialState = { 
        categoryName,
        setCategoryName, 
        currency, 
        setCurrency, 
        handleChange ,
        productPrice,
        setProductPrice,
       
    }




    return ( 
        <MyContext.Provider value={initialState}>
            {children}
        </MyContext.Provider>
    )
}


export default ContextProvider;