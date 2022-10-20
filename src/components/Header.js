import React from 'react'
import styles from './Header.module.css'
import Logo from './Logo'
import Navbar from './Navbar'
import ShoppingBag from './ShoppingBag'
function Header() {
  return (
    <div className={styles.header__container}>
      <Navbar />
      <Logo/>
      <ShoppingBag />
    </div>
  )
}

export default Header
