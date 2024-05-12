import { useNavigate } from 'react-router-dom'
import useEventsData from '../../hooks/useEventsData'
import EventItem from './components/EventItem'
import './style.css'

const Events = ({ searchTerm }) => {
  const navigate = useNavigate()
  const { events, isLoading, error } = useEventsData()
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
          info={eventItem.promoter?.description}
          onEventClick={handleEventItemClick}
          id={eventItem.id}
        />
      ))
    )
  }
  if (error) { return <div>An error has occurred</div> }
  if (isLoading) { return <h1>Loading results</h1> }
  return (
    <div className='events-container'>
      Events list
      {renderedEvents()}
    </div>
  )
}

export default Events
