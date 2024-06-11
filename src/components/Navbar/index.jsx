import styles from './Navbar.module.css'
import home from '../../assets/home.png'

import React, { useState, forwardRef, useImperativeHandle } from 'react'
import { Link } from 'react-router-dom'

const Navbar = forwardRef(({ onSearch }, ref) => {
  const [search, setSearch] = useState('')

  const refresh = () => onSearch(search) // Refreshes site after filtering events to show all again.

  useImperativeHandle(ref, () => ({
    search,
    setSearch
  }))

  const handleInputChange = (e) => setSearch(e.target.value)

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(search)
      setSearch('')
    }
  }

  return (
    <div ref={ref} className={styles.mainContainer}>
      <section className={styles.brandSection}>
        <p className={styles.brandName}>Ticket Master Events</p>
      </section>
      <section className={styles.inputContainer}>
        <div onClick={refresh}>
          <img src={home} className={styles.homeBtn} />
        </div>
        <input
          placeholder='Busca tu evento favorito'
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          value={search}
          className={styles.input}
        />
        <Link to='/profile/my-info' className={styles.myProfile}>
          My profile
        </Link>
      </section>
    </div>
  )
})

Navbar.displayName = 'Navbar'

export default Navbar
