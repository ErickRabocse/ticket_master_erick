import React from 'react'
import EventItem from './components/EventItem'
import data from '../../data/events.json'

const Events = () => {
  // console.log(data)
  // const eventos = data._embedded
  // console.log(eventos)
  const { _embedded: { events } } = data
  console.log(events)

  return (
    <div>
      Events
      <EventItem />
    </div>
  )
}

export default Events
