import React from 'react'

const EventItem = ({ img, name, info }) => {
  return (
    <div>
      <img src={img} alt='event image' style={{ height: '200px' }} />
      <h4>{name}</h4>
      <p>{info}</p>
    </div>
  )
}

export default EventItem
