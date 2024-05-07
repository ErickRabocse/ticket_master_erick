import React from 'react'
// import './styles.css'
import styles from './EventItem.module.css'

const EventItem = ({ img, name, info, onEventClick, id }) => {
  const handleSeeMoreClick = (e) => {
    e.stopPropagation()
    onEventClick(id)
  }
  console.log(styles)
  return (
    <div onClick={() => console.log('parent clicked')} className={styles.eventItemContainer}>
      <img src={img} alt='event image' style={{ width: '200px' }} />
      <div className={styles.eventInfoContainer}>
        <h4 className={styles.eventName}>{name}</h4>
        <p className={styles.eventInfo}>{info}</p>
        <button className={styles.seeMoreBtn} onClick={handleSeeMoreClick}>Details</button>
      </div>
    </div>
  )
}

export default EventItem
