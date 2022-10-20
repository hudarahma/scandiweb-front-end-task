import React from 'react'
import styles from './ShoppingBag.module.css';


function ShoppingBag() {
  return (
    <div className={styles.shoppingbag__container}>
    {/* option on hover need to be fixed or use material UI */}
      <select className={styles.currencies}>
          <option className={styles.option} value='$'>$ USD</option>
          <option className={styles.option}>€ EUR</option>
          <option className={styles.option}>¥ JPY</option>
        </select>
        <img className={styles.bag} src='/icons/Vector.svg' alt='bag-svg'/>

    </div>
  )
}

export default ShoppingBag
