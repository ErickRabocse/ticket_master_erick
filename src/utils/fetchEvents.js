import wrapPromise from './wrapPromise'

const fetchEventDetails = async (eventId) => {
  try {
    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${import.meta.env.VITE_TM_API_KEY}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}
const fetchData = (eventId) => {
  return {
    eventDetail: wrapPromise(fetchEventDetails(eventId))
  }
}

export default fetchData
