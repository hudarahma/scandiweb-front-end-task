import React from 'react'
import styles from './Logo.module.css'
function Logo() {
  return (
    <div className={styles.logo}>
        <img className={styles.logo__bag} src='/icons/logo.svg' alt='logo' />
        <img className={styles.logo__smile} src='/icons/inner.svg' alt='logo'/>
    </div>
  )
}

export default Logo
