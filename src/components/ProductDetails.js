import React, { useEffect, useRef, useState } from 'react'
import styles from './ProductDetails.module.css';
import { useProduct } from '../hooks/useProduct';
import { useParams } from 'react-router-dom';

function ProductDetails() {

    const { id } = useParams();
    const { data, loading, error } = useProduct(id);
    const defualtImageRef = useRef();

    const [ image, setImage ] = useState(defualtImageRef);
    const [ attributeValue, setAttributeValue ] = useState();
    // const [ attributePrice, setAttributesPrice ] = useState();
    
   
    // save attributes on click .. bug is only saves one attribute, not multiple
    let attributesOption = [ ];
    attributesOption.push(attributeValue);
    attributesOption = [ ...attributesOption, {id: attributeValue}];
    console.log(attributesOption,'options') 

    
    // console.log(data.product.gallery[0],'data--->')
    // useEffect(()=> {
        
    // },[]);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log({data, loading, error})
   
    
    let addToCardProduct = [{
        prodcutBrand: data.product.brand,
        productName: data.product.name,
        // atributeName: data.product.attributes,
        selectedAttribut : attributesOption ,
        productImageList: data.product.gallery,
        attributePrice: data.product.price,
        
    }];
    
    console.log(addToCardProduct,'selectedProduct')



    
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
                        <h1 className={styles.brand}  >{data.product.brand}</h1>
                        <h1 className={styles.name}>{data.product.name}</h1>
                    </div>
                {/* save the selected attributes into the array each time */}
                {/* its good for only saving one attributes , not multiple */}
                    { data.product.attributes.map( attribute => (
                        
                    <div className={styles.product__size} key={attribute.id}>
                        <span >{attribute.name}</span>

                        <div className={styles.btn__size}>
                        {attribute.items.map(item => (
                            <button className={styles.btn} style={{backgroundColor:`${item.value}`}} key={item.id} 
                              onClick={()=> setAttributeValue(item.id)}>
                            {item.displayValue}</button>
                                
                        ))}
                        </div>
                    </div>
                    ))}
                            {/* price has to change from home component */}
                    <div className={styles.product__price}>
                        <span className={styles.price}>PRICE:</span>
                        <h3>$50.00</h3>
                    </div>
                    
                    {/* fix the discription on the UI */}
                    <button className={styles.add__to__basket__btn}>ADD TO CART</button>
                    <span className={styles.product__discription}>{data.product.description}</span>
                </div>
      </div>
  
   
  )
}

export default ProductDetails
