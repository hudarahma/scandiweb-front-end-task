import React from 'react'
import styles from './ProductDetails.module.css';
import { useProduct } from '../hooks/useProduct';
import { useParams } from 'react-router-dom';

function ProductDetails() {

    const { id } = useParams();

    const { data, loading, error } = useProduct(id);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log({data, loading, error})


    return (
    
        <div className={styles.product__details__container} key={data.product.id}>

                <div className={styles.product__list__images}>
                {data.product.gallery.map(img => (
                    <img src={img} alt='product' key={img.id}/>
                ))}
                </div>
                <div className={styles.product__image}>
                    <img src={data.product.gallery[0]} alt='product' />
                </div>
                <div className={styles.product__details}>
        
                    <div className={styles.product__brand__name}>
                        <h1 className={styles.brand}>{data.product.brand}</h1>
                        <h1 className={styles.name}>{data.product.name}</h1>
                    </div>
        
                    <div className={styles.product__size}>
                        <span>SIZE:</span>
                        <div className={styles.btn__size}>
                            <button className={styles.btn}>XS</button>
                            <button className={styles.btn}>S</button>
                            <button className={styles.btn}>M</button>
                            <button className={styles.btn}>L</button>
                        </div>
                    </div>
                    {}
                    <div className={styles.product__color}>
                        <span>COLOR:</span>
                        <div className={styles.btn__color}>
                            <button className={styles.button}>color</button>
                            <button className={styles.button}>color</button>
                            <button className={styles.button}>color</button>
                        </div>
                    </div>
        
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
