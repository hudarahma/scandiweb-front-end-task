import React from 'react'
import styles from './ProductDetails.module.css';

function ProductDetails() {
  return (
    <div className={styles.product__details__container}>
   
        <div className={styles.product__list__images}>
            <img src='/image/ProductD.png' alt='product-image' />
            <img src='/image/ProductD.png' alt='product-image' />
            <img src='/image/ProductD.png' alt='product-image' />
        </div>
        <div className={styles.product__image}>
            <img src='/image/ProductD.png' alt='product-image' />
        </div>
        <div className={styles.product__details}>

            <div className={styles.product__brand__name}>
                <h1 className={styles.brand}>Apollo</h1>
                <h1 className={styles.name}>Running Short</h1>
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
            <span className={styles.product__discription}>
            Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.
            </span>
        </div>

    </div>
  )
}

export default ProductDetails
