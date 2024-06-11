import './style.css'
import { useNavigate } from 'react-router-dom'
import { memo } from 'react'
import EventItem from './components/EventItem'

const Events = ({ searchTerm, events }) => {
  const navigate = useNavigate()
  const handleEventItemClick = (id) => {
    navigate(`/details/${id}`)
  }
  const renderEvents = () => {
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
          state={eventItem._embedded.venues[0].state.name}
        />
      ))
    )
  }
  return (
    <div className='mainContainer'>
      {renderEvents()}
    </div>
  )
}

export default memo(Events)
