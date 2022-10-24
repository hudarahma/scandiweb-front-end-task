import React from 'react'
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className={styles.navbar__container}>
       
            <nav>
                <Link to='/categories/women'>
                    <span className={styles.span}>Women</span>
                </Link>
                <Link to='/categories/Men'>
                    <span className={styles.span}>Men</span>
                </Link>
                <Link to='/categories/Kids'>
                    <span className={styles.span}>Kids</span>
                </Link>
            </nav>     
    </div>
  )
}

export default Navbar
