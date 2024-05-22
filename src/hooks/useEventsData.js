import { useState } from 'react' // import { useRef } from 'react'
const useEventsData = () => {
  const [data, setData] = useState([]) // data = useRef([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()

  const fetchEvents = async (params) => {
    try {
      const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}&countryCode=MX${params?.length ? params : ''}`)
      const data = await response.json()
      setData(data)
      setIsLoading(false)
    } catch (error) {
      setError(error)
    }
  }

  return {
    events: data?._embedded?.events || [], // events: data.current?._embedded?.events || []
    page: data?.page || {},
    isLoading,
    error,
    fetchEvents
  }
}
export default useEventsData
