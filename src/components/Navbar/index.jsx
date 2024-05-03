import React, { useEffect, useState } from 'react'

const Navbar = ({ onSearch }) => {
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
    <div>
      <p>My tickets</p>
      <input
        placeholder='Busca tu evento favorito'
        onChange={handleInputSearch}
        value={search}
        onKeyDown={handleInputKeyDown}
      />
    </div>
  )
}

export default Navbar
