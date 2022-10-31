import React, { useContext } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import ShoppingBag from './ShoppingBag';
import { MyContext } from '../Context';


function Header() {

  
  const { loading, error, data } = useProducts();
  const { setCategoryName } = useContext(MyContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className={styles.header__container}>
      <div className={styles.navbar__container} >
          <nav>
            
          {data.categories.map(category => (
            <Link to='/'>
              <span className={styles.span} key={category.id}  onClick={()=> setCategoryName(category.name)}>{category.name}</span>
            </Link>
          ))}
             
          </nav>     
     </div>

     <div className={styles.logo}>
        <img className={styles.logo__bag} src='/icons/logo.svg' alt='logo' />
        <img className={styles.logo__smile} src='/icons/inner.svg' alt='logo'/>
      </div>
      <ShoppingBag />
    </div>
  )
}

export default Header
