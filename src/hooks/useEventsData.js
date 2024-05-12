// import { useRef } from 'react'
import { useEffect, useState } from 'react'
import eventsJSON from '../data/events.json'

const useEventsData = () => {
//   const data = useRef([])
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    setTimeout(() => {
      try {
        setData(eventsJSON) // data.current = eventsJSON
        setIsLoading(false)
      } catch (error) {
        setError(error)
      }
    }, 1000)
  }, []) // console.log(data?._embedded?.events)
  return {
    // events: data.current?._embedded?.events || []
    events: data?._embedded?.events || [],
    isLoading,
    error
  }
}
export default useEventsData
