import React, { useContext } from 'react';
import Cards from '../components/Cards';
import Header from '../components/Header';
import styles from './Home.module.css';
import { Link } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts';
import { MyContext } from '../Context';



function Home() {

  const { loading, error, data } = useProducts();
  const { categoryName, currency } = useContext(MyContext);
 
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
 

  console.log({
    loading,
    error,
    data
  })

 

  return (
    <div className={styles.home__container}>
      <Header/>
        <div className={styles.category__name}>
        <h1>{categoryName}</h1>
        </div>

      {data.categories[0].products.map( (product, index) => (
        <Link to={`/product/${product.id}`} key={index}>
          <div className={styles.cards__wrapper} key={index} >
            { product.prices.filter(price =>  price.currency.symbol === currency).map(filterPrice => (
              <Cards 
                key={product.id} 
                image={product.gallery[0]} 
                name={product.name} 
                price={filterPrice.amount} 
                symbol={currency} 
                                  
                />
            ))}
          </div>
        </Link>

      ))}
    </div>
  )
}

export default Home
