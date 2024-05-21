import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const { eventId } = useParams() //  console.log(eventId)
  const [eventData, setEventData] = useState({})
  const [error, setError] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=Fse8v45WAfjmtQqEuII6loIEe2GJdeRb`)
        const data = await response.json()
        setEventData(data)
        setIsLoading(false)
      } catch (error) {
        setEventData({})
        setError(error)
        setIsLoading(false)
      }
    }
    fetchEventsData()
  }, [])
  console.log(eventData)
  return (
    <div>
      Details view component
    </div>
  )
}
export default Details
