import React from 'react'
import './styles.css'

const EventItem = ({ img, name, info, onEventClick, id }) => {
  const handleSeeMoreClick = (e) => {
    e.stopPropagation()
    onEventClick(id)
  }
  return (
    <div onClick={() => console.log('parent clicked')} className='event-item-container'>
      <img src={img} alt='event image' style={{ width: '200px' }} />
      <div className='event-info-container'>
        <h4 className='event-name'>{name}</h4>
        <p className='event-info'>{info}</p>
        <button className='see-more-btn' onClick={handleSeeMoreClick}>Details</button>
      </div>
    </div>
  )
}

export default EventItem
