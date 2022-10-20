import React from 'react'
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbar__container}>
       
            <nav>
                <a>
                    <span className={styles.span}>Women</span>
                </a>
                <a>
                    <span className={styles.span}>Men</span>
                </a>
                <a>
                    <span className={styles.span}>Kids</span>
                </a>
            </nav>     
    </div>
  )
}

export default Navbar
