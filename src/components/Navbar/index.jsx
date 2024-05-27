import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import { Link } from 'react-router-dom'

const Navbar = forwardRef(({ onSearch }, ref) => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log('useEffect when search changes')
  }, [search, onSearch])

  useImperativeHandle(ref, () => ({
    search,
    setSearch
  }))

  const handleInputSearch = (e) => {
    setSearch(e.target.value)
  }
  // console.log(search)
  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(search)
      setSearch('')
    }
  }
  return (
    <div
      ref={ref} style={{
        marginBottom: 20,
        display: 'flex'
      }}
    >
      <section
        className='brand' style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center'
        }}
      >
        <p style={{
          fontSize: 24,
          fontWeight: 'bold'
        }}
        >My tickets
        </p>
      </section>
      <section
        className='search' style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}
      >
        <input
          placeholder='Busca tu evento favorito'
          onChange={handleInputSearch}
          value={search}
          onKeyDown={handleInputKeyDown}
          style={{
            padding: '2px 6px',
            width: '200px',
            borderRadius: '5px',
            border: 'none',
            fontSize: 16
          }}
        />
        <Link to='/profile/my-info' style={{ marginLeft: 24, color: 'white', textDecoration: 'none' }}>My profile</Link>
      </section>
    </div>
  )
})

Navbar.displayName = 'Navbar'

export default Navbar
