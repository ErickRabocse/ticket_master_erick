import { useNavigate } from 'react-router-dom'
import EventItem from './components/EventItem'
import './style.css'

const Events = ({ searchTerm, events }) => {
  const navigate = useNavigate()
  const handleEventItemClick = (id) => {
    navigate(`/details/ ${id}`)
  }
  const renderedEvents = () => {
    let eventsFiltered = events
    if (searchTerm.length > 0) {
      eventsFiltered = eventsFiltered.filter(item => (
        item.name.toLowerCase().includes(searchTerm)
      ))
    }
    return (
      eventsFiltered.map((eventItem) => (
        <EventItem
          key={eventItem.id}
          img={eventItem.images[1].url}
          name={eventItem.name}
          info={eventItem.info}
          onEventClick={handleEventItemClick}
          id={eventItem.id}
        />
      ))
    )
  }
  return (
    <div className='events-container'>
      Events list
      {renderedEvents()}
    </div>
  )
}
export default Events
