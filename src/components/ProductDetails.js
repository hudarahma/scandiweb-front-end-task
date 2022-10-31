import React, { useEffect, useRef, useState } from 'react'
import styles from './ProductDetails.module.css';
import { useProduct } from '../hooks/useProduct';
import { useParams } from 'react-router-dom';

function ProductDetails() {

    const { id } = useParams();
    const { data, loading, error } = useProduct(id);

  
    let attributesOption = [ ];
    const [ image, setImage ] = useState();
    const [ attributeValue, setAttributeValue ] = useState(attributesOption);
    const [ attributePrice, setAttributesPrice ] = useState();
    
    const defualtImageRef = useRef()
    
    // attributesOption.push(attributeValue);
    // attributesOption = [ ...attributesOption, {id: attributeValue}];
    // console.log(attributesOption,'options') 


    
    const getAttributes = (value) => {
        setAttributeValue( value => [...value, attributesOption]);
        console.log(attributeValue,'att')
    }
    
    // console.log(data.product.gallery[0],'data--->')
    useEffect(()=> {
        defualtImageRef.current = image;
    },[image]);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log({data, loading, error})
   
    
    let addToCardProduct = [{
        prodcutBrand: data.product.brand,
        productName: data.product.name,
        // atributeName: data.product.attributes,
        // selectedAttribut : attributesOption ,
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
                
                    { data.product.attributes.map( attribute => (
                        
                    <div className={styles.product__size} key={attribute.id}>
                        <span >{attribute.name}</span>

                        <div className={styles.btn__size}>
                        {attribute.items.map(item => (
                            <button className={styles.btn} style={{backgroundColor:`${item.value}`}} key={item.id} 
                              onClick={()=> getAttributes(item.id)}>
                            {item.displayValue}</button>
                                
                        ))}
                        </div>
                    </div>
                    ))}
                    {/* <div className={styles.product__color}>
                        <span>COLOR:</span>
                        <div className={styles.btn__color}>
                            <button className={styles.button}>color</button>
                            <button className={styles.button}>color</button>
                            <button className={styles.button}>color</button>
                        </div>
                    </div> */}
            
                    <div className={styles.product__price}>
                        <span className={styles.price}>PRICE:</span>
                        <h3>$50.00</h3>
                    </div>
        
                    <button className={styles.add__to__basket__btn}>ADD TO CART</button>
                    <span className={styles.product__discription}>{data.product.description}</span>
                </div>
      </div>
  
   
  )
}

export default ProductDetails
