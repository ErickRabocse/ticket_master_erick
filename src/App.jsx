import './App.css'
import Navbar from './components/Navbar'
import Events from './components/Events'
import { useState, useRef } from 'react'

function App () {
  const [searchTerm, setSearchTerm] = useState('')
  const containerRef = useRef()

  const handleNavbarSearch = (term) => {
    setSearchTerm(term)
    console.log(containerRef.current)
  }
  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      <Events searchTerm={searchTerm} />
    </>
  )
}

export default App
