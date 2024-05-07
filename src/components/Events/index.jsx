import useEventsData from '../../hooks/useEventsData'
import EventItem from './components/EventItem'

const Events = ({ searchTerm }) => {
  const { events, isLoading, error } = useEventsData()
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
  if (error) { return <div>An error has occurred</div> }
  if (isLoading) { return <h1>Loading results</h1> }
  return (
    <div>
      Events list
      {renderedEvents()}
    </div>
  )
}

export default Events
