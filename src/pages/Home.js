import React, { useContext } from 'react';
import Cards from '../components/Cards';
import Header from '../components/Header';
import styles from './Home.module.css';
import { Link } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts';
import { MyContext } from '../Context';


function Home() {

  const { loading, error, data } = useProducts();
  const { categoryName } = useContext(MyContext);
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

      {data.categories[0].products.map( product => (
        <Link to={`/product/${product.id}`}>
            <div className={styles.cards__wrapper} key={product.id}>
              <Cards id={product.id} image={product.gallery[0]} name={product.name} price={product.prices[0].amount} symbol={product.prices[0].currency.symbol} />
            </div>
          </Link>

      ))}
    </div>
  )
}

export default Home
