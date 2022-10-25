import React from 'react'
import styles from './Cards.module.css';
import { useQuery, gql } from '@apollo/client';

const GET_DATA = gql`
  query GetData {
      categories{
          name
          products{
          id
          name
          brand
          inStock
          gallery
          category
          description
          prices{
              amount
              currency{
              symbol
              label
              }
          }
          attributes{
              type
              name
              items{
              value
              displayValue
              id
              }
          }
          }
      }
}
`;
function Cards() {
  const { loading, error, data } = useQuery(GET_DATA);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.categories[0].products.map(( product ) => (

    <div className={styles.cards__container} key={product.id}>
        
        <img src='/image/ProductD.png' alt='product-image' />
        <button className={styles.add__to__basket__button}><img className={styles.basket__img} src='/icons/Vector-white.svg' alt='' /></button>
        <h3 className={styles.product__name}>{product.brand}</h3>
        <h3 className={styles.product__price}>{product.price}</h3>
    </div>
  )
  )
}

export default Cards
