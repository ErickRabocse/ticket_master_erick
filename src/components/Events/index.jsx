import React, { useState } from 'react'
import EventItem from './components/EventItem'
// import data from '../../data/events.json'
import eventsJSON from '../../data/events.json'

const Events = () => {
  const [data] = useState(eventsJSON)
  const { _embedded: { events } } = data
  console.log(events)
  const handleEventClickItem = (id) => {
    console.log('event clicked', id)
  }
  const eventComponent = events.map((eventItem) => (
    <EventItem
      key={eventItem.id}
      img={eventItem.images[1].url}
      name={eventItem.name}
      info={eventItem.promoter?.description}
      onEventClick={handleEventClickItem}
      id={eventItem.id}
    />
  ))
  return (
    <div>
      Events
      {eventComponent}
    </div>
  )
}

export default Events
