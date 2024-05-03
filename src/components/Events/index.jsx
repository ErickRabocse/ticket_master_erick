import EventItem from './components/EventItem'
import useEventsData from '../../hooks/useEventsData'

const Events = ({ searchTerm }) => {
  const { events } = useEventsData()
  const handleEventClickItem = (id) => {
    console.log('event clicked', id)
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
          onEventClick={handleEventClickItem}
          id={eventItem.id}
        />
      ))
    )
  }
  return (
    <div>
      Events
      {renderedEvents()}
    </div>
  )
}

export default Events
