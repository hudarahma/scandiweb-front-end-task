import React, { useContext } from 'react'
import CartProduct from '../components/CartProduct';
import Header from '../components/Header'
import Payment from '../components/Payment';
import { MyContext } from '../Context';
import styles from './Cart.module.css';

function Cart() {
  const { products } = useContext(MyContext);
 
  // const price = () => {
  //  
  // }

  return (
    <div className={styles.cart__container}>
     
       <Header />
      <div className={styles.page__title}>
        <h2>CART</h2>
      </div>
        <div>
          { products && products.map((product, key) => {
              return(
                <CartProduct key={key} brand={product.brand} name={product.name} price={product.price} attributeId={product.attribute} image={product.image} />

              )
          })}
        </div>
        <Payment />

    </div>
  )
}

export default Cart
