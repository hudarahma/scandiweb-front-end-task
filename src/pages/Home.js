import React, { useContext } from 'react';
import { MyContext } from '../Context';
import Cards from '../components/Cards';
import Category from '../components/Category';
import Header from '../components/Header';
import styles from './Home.module.css';

// Import everything needed to use the `useQuery` hook
// import { useQuery, gql} from '@apollo/client';




function Home() {
  // const { loading, error } = useQuery(GET_DATA);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  return (
    <div className={styles.home__container}>
      <Header/>
      <Category />
      <div className={styles.cards__wrapper}>
        <Cards />
      </div>
    </div>
  )
}

export default Home
