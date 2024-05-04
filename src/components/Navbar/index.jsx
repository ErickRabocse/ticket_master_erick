import React, { useEffect, useState, forwardRef } from 'react'

const Navbar = forwardRef(({ onSearch }, ref) => {
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log('useEffect on NavBar, when search changes')
  }, [search, onSearch])

  const handleInputSearch = (e) => {
    setSearch(e.target.value)
  }
  // console.log(search)
  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(search)
    }
  }
  return (
    <div ref={ref}>
      <p>My tickets</p>
      <input
        placeholder='Busca tu evento favorito'
        onChange={handleInputSearch}
        value={search}
        onKeyDown={handleInputKeyDown}
      />
    </div>
  )
})

Navbar.displayName = 'Navbar'

export default Navbar
