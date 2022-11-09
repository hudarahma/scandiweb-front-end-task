import React from 'react'

import styles from './Payment.module.css';

function Payment() {
    // const { counter, productPriceRef } = useContext(MyContext);
  return (
    <div className={styles.total__wrapper}>
       
        <span>Tax 21%: </span>
        <span>Quantity: </span>
        <span>Total: 200</span>
        <button className={styles.order}>Order</button>
    </div>
  )
}

export default Payment
