import { useState } from 'react'
// All this key stores is --> 'likedEvents'
import { LIKED_EVENTS_STORAGE_KEY } from '../utils/constants'
// fn that returns T/F if the likedEvents-array retrieved from localStorage contains the eventId passed as param
const checkIsEventLiked = (eventId) => {
  // IMPORTANT when retrieving from localStorage: parse the json to access the array props
  const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || []
  return likedEvents.includes(eventId)
}
// cutom-hook that takes as eventId passed as param to check if an event is liked & likes/unlikes events
const useLikeEvents = (eventId) => {
  // isEventLiked state set as T/F depending on the execution of checkEvenLiked-fn prev-declared.
  const [isEventLiked, setIsEventLiked] = useState(checkIsEventLiked(eventId))
  // fn that uses the likedEvents-array & the index of the likedEvent --> if found!
  const toggleEventLike = () => {
    const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY)) || []
    const eventIndex = likedEvents.indexOf(eventId)
    // removing a prev-liked-event found-by-its-index from the likedEvents-array
    if (eventIndex !== -1) {
      likedEvents.splice(eventIndex, 1)
      // Updating the state of the event to false so that the style of the heart changes to empty --> This state-update refreshes the module
      setIsEventLiked(false)
    } else {
      // if the event-index is not found then it's added to the likedEvents-array
      likedEvents.push(eventId)
      setIsEventLiked(true)
    }
    // Saving in localStorage the likedEvents-array using the const-key ('likedEvents')
    // IMPORTANT when saving to localStorage: stringify the json to convert it to a string
    localStorage.setItem(LIKED_EVENTS_STORAGE_KEY, JSON.stringify(likedEvents))
  }
  // Returns the status of the event to T/F & the fn to like/unlike an event.
  return {
    isEventLiked,
    toggleEventLike
  }
}
export default useLikeEvents
