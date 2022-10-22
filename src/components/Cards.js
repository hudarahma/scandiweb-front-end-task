import React from 'react'
import styles from './Cards.module.css';

function Cards() {
  return (
    <div className={styles.cards__container}>
        <img src='/image/ProductD.png' alt='product-image' />
        <button className={styles.add__to__basket__button}><img className={styles.basket__img} src='/icons/Vector-white.svg' alt='' /></button>
        <h3 className={styles.product__name}>Apollo Running Short</h3>
        <h3 className={styles.product__price}>$50.00</h3>
    </div>
  )
}

export default Cards
