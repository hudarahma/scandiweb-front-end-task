import React , { useContext } from 'react'
import styles from './ShoppingBag.module.css';
import { useCurrencies } from '../hooks/useCurrencies';
import { MyContext } from '../Context';

function ShoppingBag() {
  const { loading, error, data } = useCurrencies();

  const { currency , handleChange } = useContext(MyContext)
 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: </p>;


  
  
  return (
    <div className={styles.shoppingbag__container}>
      {/* option on hover need to be fixed or use material UI */}
        
        <select className={styles.currencies} value={currency} onChange={handleChange} >
        {data.currencies.map((currency, index) =>
          <option className={styles.option} key={index} value={currency.symbol} >{currency.symbol} {currency.label}</option>
        )}
        </select>
        <img className={styles.bag} src='/icons/Vector.svg' alt='bag-svg'/>

      </div>
  )
}

export default ShoppingBag
