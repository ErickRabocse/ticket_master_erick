import React from 'react'

const EventItem = ({ img, name, info, onEventClick, id }) => {
  const handleSeeMoreClick = (e) => {
    e.stopPropagation()
    onEventClick(id)
  }
  return (
    <div onClick={() => console.log('parent clicked')}>
      <img src={img} alt='event image' style={{ height: '200px' }} />
      <h4>{name}</h4>
      <p>{info}</p>
      <button onClick={handleSeeMoreClick}>Details</button>
    </div>
  )
}

export default EventItem
