import React, {  useContext, useRef, useState, useEffect } from 'react'
import styles from './ProductDetails.module.css';
import { useProduct } from '../hooks/useProduct';
import { useParams } from 'react-router-dom';
import { MyContext } from '../Context';

function ProductDetails() {
    
    const { id } = useParams();
    const { data, loading, error } = useProduct(id);
    const { currency, setProductPrice, setProductBrand, setProductName } = useContext(MyContext);
    
    let attributeOption = [ ];
    const defualtImageRef = useRef();
  

    const [ image, setImage ] = useState(defualtImageRef);
    const [ attributeValue, setAttributeValue ] = useState('');
    
    
    
   
    // save attributes on click .. bug is only saves one attribute, not multiple
    
    const allAtts = (name) => {
        
        attributeOption.push(name);
        attributeOption = [ ...attributeOption, attributeValue ]
        console.log(attributeOption,'option')
       
    }
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log({data, loading, error})

  
   
   
    
   

    
    const addToCart = () => {

    }
    
    

    
    


    
    return (
    
        <div className={styles.product__details__container} key={data.product.id}>

                <div className={styles.product__list__images}>
                {data.product.gallery.map(img => (
                    <img src={img} alt='product' key={img.id} onClick={()=> setImage(img)} ref={defualtImageRef}/>
                ))}
                </div>
                <div className={styles.product__image}>
                    <img src={image} alt={`${data.product.gallery[0]}`}  />
                </div>
                <div className={styles.product__details}>
        
                    <div className={styles.product__brand__name}>
                        
                        <input 
                            type='text'
                            disabled 
                            className={styles.brand}
                            value={data.product.brand}
                            onChange={(e) => setProductBrand(e.target.value) }
                        />
                        
                        <input 
                            type='text'
                            disabled 
                            className={styles.name}
                            value={data.product.name}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </div>
                {/* save the selected attributes into the array each time */}
                {/* its good for only saving one attributes , not multiple */}
                    { data.product.attributes.map( (attribute, index) => (
                        
                        <div className={styles.product__size} key={attribute.id}>
                            <span >{attribute.name}</span>

                            <div className={styles.btn__size} key={index}>
                            {attribute.items.map((item) => (
                                <button 
                                    className={styles.btn}
                                    style={{backgroundColor:`${item.value}`}} 
                                    key={item.id} 
                                    onClick={()=> { 
                                        setAttributeValue(item.id); 
                                        allAtts(item.id); 
                                    }}
                                >
                                {item.displayValue}
                                </button>
                                    
                            ))}
                            </div>
                        </div>
                    ))}
                            {/* price changes  */}
                    <div className={styles.product__price} >
                        <span className={styles.price}>PRICE:</span>
                        { data.product.prices.filter(price =>  price.currency.symbol === currency).map((filterPrice, index) => (
                            <h3 key={index}>
                                <input
                                disabled
                                className={styles.price__input}  
                                type="text"
                                value={currency + filterPrice.amount}
                                onChange={(e) => setProductPrice(e.target.value) }/>
                            </h3>
                        ))
                        }
                    
                    </div>

                    
                    {/* fix the discription on the UI */}
                    <button className={styles.add__to__basket__btn}>ADD TO CART</button>

                    <span className={styles.product__discription}> {data.product.description}</span>
                </div>
      </div>
  
   
  )
}

export default ProductDetails
