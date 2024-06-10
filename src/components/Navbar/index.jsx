import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import { Link } from 'react-router-dom'
import home from '../../assets/home.png'
import styles from './Navbar.module.css'

const Navbar = forwardRef(({ onSearch }, ref) => {
  const [search, setSearch] = useState('')
  useEffect(() => {
    console.log('useEffect when search changes')
  }, [search, onSearch])
  useImperativeHandle(ref, () => ({
    search,
    setSearch
  }))
  const handleInputSearch = (e) => setSearch(e.target.value)
  const refresh = () => onSearch(search)
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
          onChange={handleInputSearch}
          value={search}
          onKeyDown={handleInputKeyDown}
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
