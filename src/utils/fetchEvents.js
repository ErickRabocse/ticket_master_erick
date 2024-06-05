import wrapPromise from './wrapPromise'

const fetchEventDetails = async (eventId) => {
  try {
    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`)
    const data = await response.json()
    // setEventData(data)
    // setIsLoading(false)
    return data
  } catch (error) {
    // setEventData({})
    // setError(error)
    // setIsLoading(false)
    console.log(error)
  }
}
const fetchData = (eventId) => {
  return {
    eventDetail: wrapPromise(fetchEventDetails(eventId))
  }
}

export default fetchData
