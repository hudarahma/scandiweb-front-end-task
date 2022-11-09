import React , { useContext, useState } from 'react'
import styles from './ShoppingBag.module.css';
import { useCurrencies } from '../hooks/useCurrencies';
import { MyContext } from '../Context';
import CartProduct from './CartProduct';


function ShoppingBag() {
  const { loading, error, data } = useCurrencies();

  const { currency , handleChange, counter } = useContext(MyContext);
  const [expanded, setExpand] = useState(false);
 
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
        <img className={styles.bag} src='/icons/Vector.svg' alt='bag-svg' onClick={()=> setExpand(!expanded)}/>
        <h4 className={styles.counter}>{counter}</h4>  

        { expanded && 
          <div className={styles.expand__box}>
            <h3>My Bag, {counter} items</h3>
            'still in process'
            <CartProduct />
          </div>
        }
      </div>
  )
}

export default ShoppingBag
