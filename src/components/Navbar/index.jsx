import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react'

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
