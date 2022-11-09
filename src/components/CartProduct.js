import React, { useContext, useState } from 'react'
import { MyContext } from '../Context';
import styles from './CartProduct.module.css';

function CartProduct( props ) {
    const { products , counter, increment, decrement } = useContext(MyContext);
    const [slideNumber, setSlideNumber] = useState(0);


    // console.log(products[0].gallery,'gallery');
   
    // prev slide
    const prevSlide = () => {
        slideNumber === 0 
        ? setSlideNumber( products[0].gallery.length -1 ) 
        : setSlideNumber( slideNumber -1 )
    }

    // next slide

    const nextSlide = () => {
        slideNumber +1 === products[0].gallery.length 
        ? setSlideNumber(0) 
        : setSlideNumber(slideNumber +1)
    }
    

    

  return (
    <div className={styles.cart__product__container} key={props.key}>
        <hr />
        <div className={styles.cart__product__wrapper}>

            <div className={styles.cart__left}>
                <h3>{props.brand}</h3>
                <h3>{props.name}</h3>
                <h3>{props.price}</h3>
                <h3>{props.attributeName}</h3>
                <button className={styles.attributes}>{props.attributeId}</button>
            </div>
            <div className={styles.cart__right}>
                <div className={styles.product__counter}>
                    <button className={styles.product__counter__btn} onClick={increment}>+</button>
                    <h3>{counter}</h3>
                    <button className={styles.product__counter__btn} onClick={decrement}>-</button>
                </div>
                <div className={styles.product__image__wrapper}>
                     <img className={styles.product__image} src={products[0].gallery[slideNumber]} alt='product'/>
                        <button className={styles.image__btn__prev} >
                            <img src='/icons/Vector-prev.svg' alt='prev'  onClick={prevSlide}/>
                        </button>
                        <button className={styles.image__btn__next} onClick={nextSlide}>
                        <img src='/icons/Vector-next.svg' alt='next'/>
                        </button>
                
                </div>
                
            </div>
        </div>

    </div>
  )
}

export default CartProduct
