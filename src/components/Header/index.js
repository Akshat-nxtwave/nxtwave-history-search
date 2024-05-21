import React from 'react'
import styles from './styles.module.css';

function Header({setInput, input}) {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <img src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png" alt="logo" />
        </div>
        <div className={styles.search}>
            <button className={styles.searchButton}><img src="https://assets.ccbp.in/frontend/react-js/search-img.png" alt="search" height="20px"/></button>
            <input type="text" className={styles.searchInput} placeholder='Search History' value = {input} onChange={(e) => setInput(e.target.value)}/>
        </div>
    </div>
  )
}

export default Header

