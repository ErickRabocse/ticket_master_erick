import React, { useEffect, useState } from 'react'
import { LIKED_EVENTS_STORAGE_KEY } from '../../../../utils/constants'
import EventItem from '../../../../components/Events/components/EventItem'
import { useNavigate } from 'react-router-dom'
import styles from './LikedEvents.module.css'
const LikedEvents = () => {
  const [events, setEvents] = useState([]) // Array where liked events will be stored
  const [isLoading, setIsLoading] = useState(false) // Flag that changes from true to false during "fetching".
  const [error, setError] = useState({}) // Flag of object which will store the "error" if the "catch" is met.
  const navigate = useNavigate() // var that will redirect to the details "page/view"
  useEffect(() => { // used to async-fetch liked events finding them by their "ID" which was previously set in local-storage.
    const fetchEventsDetails = async () => {
      try {
        setIsLoading(true)
        const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || []
        console.log('here are the liked events:', likedEvents)
        console.log('here are the events', events)
        const results = [] // Array where each event-liked-info-object will be stored, once fetched.
        for (const eventId of likedEvents) {
          const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`)
          const data = await response.json()
          results.push(data) // Creating an array of all event-liked-info-objects.
        }
        setEvents(results) // Once the loop is done, moving the event-liked-info-objects to the "events" state
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchEventsDetails() // Executing the fn to have the "events" on line-7 ready!
  }, [])
  const handleEventItemClick = (id) => { // Using the event-id from the looping to redirect the event details page.
    navigate(`/details/${id}`)
  }
  if (Object.keys(error).length > 0) { // When an error occurs and the empty-error-object receives an actual error, it will be stored in the "Object" returned and therefore caught here.
    return <div>Ha ocurrido un error</div>
  }
  if (isLoading) { // When "isloading" is set to true, during the 1st stage of the "fetching" this message will show.
    return <div>Cargando los eventos ...</div>
  }
  return (
    events.map(event => ( // Mapping on screen the "events" from line-7.
      <div key={event.id} className={styles.eventItem}>
        <EventItem
          // key={event.id}
          img={event.images[1].url}
          name={event.name}
          info={event.info}
          onEventClick={handleEventItemClick}
          id={event.id}
          state={event._embedded.venues[0].state.name}
        />
      </div>

    ))
  )
}
export default LikedEvents
