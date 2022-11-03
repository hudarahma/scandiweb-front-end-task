import React from 'react'
import styles from './Cards.module.css';
// import { useProducts } from '../graghql/useProducts'


function Cards(props) {

  return ( 
      
    <div className={styles.cards__container} key={props.id}>
        
        <img className={styles.product__img} src={props.image} alt='product' />
        
      <button className={styles.add__to__basket__button}>
        <img className={styles.basket__img} src='/icons/Vector-white.svg' alt='' />
      </button>
      <h3 className={styles.product__name}>{props.name}</h3>
      <h3 className={styles.product__price} >{props.symbol} {props.price}</h3>
    </div>  

  )  
}

export default Cards
