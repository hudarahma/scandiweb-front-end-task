import React from 'react'
import Cards from '../components/Cards';
import Category from '../components/Category';
import Header from '../components/Header';
import styles from './Home.module.css';
function Home() {
  return (
    <div className={styles.home__container}>
      <Header/>
      <Category />
      <div className={styles.cards__wrapper}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  )
}

export default Home
