import React from 'react'
import Header from '../components/Header';
import ProductDetails from '../components/ProductDetails';
import styles from './Pdp.module.css';

function Pdp() {
  return (
    <div className={styles.pdp__container}>
      <Header />
      <ProductDetails />
    </div>
  )
}

export default Pdp
