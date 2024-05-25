import React from 'react'
import styles from './EventItem.module.css'
// import { Link } from 'react-router-dom'
import filledHeart from '../../../../assets/filled-heart.png'
import emptyHeart from '../../../../assets/empty-heart.png'

const EventItem = ({ img, name, info, onEventClick, id }) => {
  const handleSeeMoreClick = (e) => {
    e.stopPropagation()
    onEventClick(id)
  }

  const handleHeartClick = () => {

  }

  return (
    <div onClick={() => console.log('parent clicked')} className={styles.eventItemContainer}>
      <div className={styles.imageContainer}>
        <img src={emptyHeart} alt='filled heart icon' className={styles.filledHeart} onClick={handleHeartClick} />
        <img src={img} alt='event image' style={{ width: '200px' }} />
      </div>
      <div className={styles.eventInfoContainer}>
        <h4 className={styles.eventName}>{name}</h4>
        <p className={styles.eventInfo}>{info}</p>
        <button className={styles.seeMoreBtn} onClick={handleSeeMoreClick}>
          {/* <Link to={`details/123 ${id}`}>
            Details
          </Link> */}
          Details
        </button>
      </div>
    </div>
  )
}

export default EventItem
