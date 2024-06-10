// import { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { useEffect, useRef, useState, useCallback } from 'react'

import ReactPaginate from 'react-paginate'

import Navbar from '../../components/Navbar'
import Events from '../../components/Events'
import styles from './Home.module.css'
import useEventsData from '../../hooks/useEventsData'
// import useEventsResults from '../../state/events-results'

const Home = () => {
  const { events, isLoading, error, fetchEvents, page } = useEventsData()

  // USING useEventsResults() is an option to use "zustand" however, it affects pagination SO I'M RETURNING TO the hook useEventsData, which works just fine
  // const { data, isLoading, error, fetchEvents, page } = useEventsResults()
  // const events = useMemo(() => data?._embedded?.events || [], [data?._embedded?.events])
  // const page = useMemo(() => data?.page || {}, [data?.page])

  const [isToggle, setIsToggle] = useState(false)
  const [bgColor, setBgColor] = useState(false)

  const [searchTerm, setSearchTerm] = useState('')
  const containerRef = useRef()
  const fetchMyEventsRef = useRef()

  fetchMyEventsRef.current = fetchEvents

  useEffect(() => {
    console.log('useEffect')
    fetchMyEventsRef.current()
  }, [])

  const handleNavbarSearch = (term) => {
    setSearchTerm(term)
    fetchEvents(`&keyword=${term}`)
  }

  const handlePageClick = useCallback(({ selected }) => {
    fetchEvents(`&keyword=${searchTerm}&page=${selected}`)
  }, [searchTerm, fetchEvents])

  const toggleBgMode = () => {
    setIsToggle(!isToggle)
    setBgColor(!bgColor)
  }

  const renderEvents = () => {
    if (isLoading) {
      return <div>Cargando resultados...</div>
    }

    if (error) {
      return <div>Ha ocurrido un error</div>
    }

    return (
      <div className={`${bgColor ? 'events-container-light' : 'events-container-dark'} ${styles.mainContainer}`}>
        <button onClick={toggleBgMode} className={styles.userModeButton}>{isToggle ? 'DARK MODE' : 'LIGHT MODE'}</button>
        <Events searchTerm={searchTerm} events={events} />
        <ReactPaginate
          className={styles.pagination}
          nextClassName={styles.next}
          previousClassName={styles.previous}
          pageClassName={styles.page}
          activeClassName={styles.activePage}
          disabledClassName={styles.disabledPage}
          breakLabel='...'
          nextLabel='>'
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={page?.totalPages}
          previousLabel='<'
          renderOnZeroPageCount={null}
        />
      </div>
    )
  }

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      {renderEvents()}
    </>
  )
}

export default Home
