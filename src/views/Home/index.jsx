import React, { useState, useRef, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Events from '../../components/Events'
import useEventsData from '../../hooks/useEventsData'

const Home = () => {
  const { events, isLoading, error, fetchEvents } = useEventsData()
  const [searchTerm, setSearchTerm] = useState('')
  const containerRef = useRef()

  useEffect(() => {
    fetchEvents()
  }, [])

  const handleNavbarSearch = (term) => {
    setSearchTerm(term)
    fetchEvents(`&keyword=${term}`)
  }

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      {!!error && <div>An error has occurred</div>}
      {isLoading ? <h1>Loading results</h1> : <Events searchTerm={searchTerm} events={events} />}

    </>
  )
}

export default Home
