// import { useRef } from 'react'
import { useEffect, useState } from 'react'
// import eventsJSON from '../data/events.json'

const useEventsData = () => {
  const [data, setData] = useState([]) // data = useRef([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=Fse8v45WAfjmtQqEuII6loIEe2GJdeRb&countryCode=MX')
        const data = await response.json()
        setData(data)
        setIsLoading(false)
      } catch (error) {
        setError(error)
      }
    }
    fetchEvents()
  }, [])
  return {
    events: data?._embedded?.events || [], // events: data.current?._embedded?.events || []
    isLoading,
    error
  }
}
export default useEventsData
