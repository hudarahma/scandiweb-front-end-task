import React from 'react'
import styles from './ShoppingBag.module.css';
import { useCurrencies } from '../graghql/useCurrencies';

function ShoppingBag() {
  const { loading, error, data } = useCurrencies();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  
  return (
    <div className={styles.shoppingbag__container}>
      {/* option on hover need to be fixed or use material UI */}
          
          <select className={styles.currencies} >
          {data.currencies.map((currency) =>(
              <option className={styles.option} key={currency.id} value={currency.symbol}>{currency.symbol} {currency.label}</option>
          ))}
          </select>
        <img className={styles.bag} src='/icons/Vector.svg' alt='bag-svg'/>

      </div>
  )
}

export default ShoppingBag
