import React, { useState } from 'react'

const Navbar = () => {
  const [search, setSearch] = useState('')
  const handleInputSearch = (e) => {
    setSearch(e.target.value)
  }
  console.log(search)
  return (
    <div>
      <p>My tickets</p>
      <input
        placeholder='Busca tu evento favorito'
        onChange={handleInputSearch}
        value={search}
      />
    </div>
  )
}

export default Navbar
