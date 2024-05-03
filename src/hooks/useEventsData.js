// import { useEffect, useRef } from 'react'
import { useEffect, useState } from 'react'
import eventsJSON from '../data/events.json'

const useEventsData = () => {
//   const data = useRef([])
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()

  useEffect(() => {
    // LOAD API CALL
    setTimeout(() => {
      try {
        //   data.current = eventsJSON
        setData(eventsJSON)
        setIsLoading(false)
      //   console.log(data.current._embedded.events)
      } catch (error) {
        setError(error)
      }
    }, 3000)
  }, [])

  console.log(data?._embedded?.events)

  return {
    // events: data.current?._embedded?.events || []
    events: data?._embedded?.events || [],
    isLoading,
    error
  }
}

export default useEventsData
