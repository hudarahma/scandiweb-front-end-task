
import React, { createContext, useRef, useState } from 'react';


export const MyContext = createContext();


const ContextProvider = ({ children }) => {

    
    const [ categoryName, setCategoryName] = useState();
    const [ productPrice, setProductPrice ] = useState('');
    const [ currency, setCurrency ] = useState('$');
    const [ counter , setCounter ] = useState(1);
    const [ price, setPrice ] = useState('');
    // const [ productName , setProductName ] = useState('');
    const [ selectedAttributs, setSelectedAttributes ] = useState('');
    const [ products , setProducts ] = useState([]);
    let productPriceRef = useRef('');
    const defualtImageRef = useRef();


    const handleChange = (e) => { 
        setCurrency(e.target.value);
        console.log(e.target.value);
    }

    const handlePrice = (e) => { 
        setPrice(e.target.value);
        console.log(e.target.value);
    }
    
    // counter increment
    const increment = () => {
        setCounter(counter + 1)
    }

    // counter decrement
    const decrement = () => {
        setCounter(counter - 1)
    }
   

    const initialState = { 
        categoryName,
        setCategoryName, 
        currency, 
        setCurrency, 
        handleChange ,
        handlePrice,
        productPrice,
        setProductPrice, 
        selectedAttributs,
        setSelectedAttributes,
        productPriceRef,
        defualtImageRef,
        products , 
        setProducts ,
        counter,
        setCounter,
        increment,
        decrement,
    }




    return ( 
        <MyContext.Provider value={initialState}>
            {children}
        </MyContext.Provider>
    )
}


export default ContextProvider;