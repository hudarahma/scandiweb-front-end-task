import React, {  useContext, useState } from 'react'
import styles from './ProductDetails.module.css';
import { useProduct } from '../hooks/useProduct';
import { useParams } from 'react-router-dom';
import { MyContext } from '../Context';
import { useNavigate } from 'react-router-dom';


function ProductDetails() {
    
    const { id } = useParams();
    const { data, loading, error } = useProduct(id);
    const { currency, productPriceRef, setSelectedAttributes, selectedAttributs , setProducts } = useContext(MyContext);
    const [ image, setImage ] = useState('');
    const [ attributeValue, setAttributeValue ] = useState('');
    let attributeOption = [ ];
    let options = [];
    let navigate = useNavigate();
   
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;
    console.log({data, loading, error})
    

    // save attributes function on click 
    const allAtts = (name) => {
       
        attributeOption.push(name);
        attributeOption = [ ...attributeOption, attributeValue ]
        console.log(attributeOption,'option')
        setSelectedAttributes(attributeOption)
       
    }
    // ADD the attributes into the global state in context api and go to the next page
    const addToCart = (event) => {
        event.preventDefault();
        options = [...options, {
            price: productPriceRef.current.value,
            brand: data.product.brand,
            name: data.product.name,
            attribute: selectedAttributs,
            image: data.product.gallery[0],
            gallery: data.product.gallery
        
        }];
        
        setProducts(options);
        console.log(options)
        navigate('/order');
    }
    


    return (
    
        <div className={styles.product__details__container} key={data.product.id}>

                <div className={styles.product__list__images}>
                {data.product.gallery.map(img => (
                    <img src={img} alt='product' key={img.id} onClick={()=> setImage(img)} />
                ))}
                </div>
                <div className={styles.product__image}>
                    <img src={image} alt='click on the list'  />
                </div>
                <div className={styles.product__details}>
        
                    <div className={styles.product__brand__name}>
                        
                        <input className={styles.brand} type='text' value={data.product.brand}  />
                        <input type='text' className={styles.name} value={data.product.name}  />

                    </div>
                {/* save the selected attributes into the array each time by the allAtts() and setAttributeValue() */}
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
                                className={styles.price__input}  
                                type="text"
                                value={currency + filterPrice.amount}
                                ref={productPriceRef}       
                                />
                            </h3>
                        ))
                        }     
                    </div>
                    {/* fix the discription on the UI */}
                    <button 
                        className={styles.add__to__basket__btn}
                        onClick={addToCart}
                    >ADD TO CART
                    </button>

                    <span className={styles.product__discription}> {data.product.description}</span>
                </div>
      </div>
  
   
  )
}

export default ProductDetails
