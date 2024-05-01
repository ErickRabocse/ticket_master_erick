import React from 'react'

const EventItem = ({ img, name, info, onEventClick, id }) => {
  return (
    <div>
      <img src={img} alt='event image' style={{ height: '200px' }} />
      <h4>{name}</h4>
      <p>{info}</p>
      <button onClick={() => onEventClick(id)}>Details</button>
    </div>
  )
}

export default EventItem
