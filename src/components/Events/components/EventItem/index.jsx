import styles from './EventItem.module.css'
import useLikeEvents from '../../../../hooks/useLikeEvents'
import filledHeart from '../../../../assets/filled-heart.png'
import emptyHeart from '../../../../assets/empty-heart.png'

const EventItem = ({ info, id, name, img, onEventClick, state }) => {
  const { isEventLiked, toggleEventLike } = useLikeEvents(id)
  const handleSeeMoreClick = (e) => {
    e.stopPropagation()
    onEventClick(id)
  }
  const handleHeartClick = () => {
    toggleEventLike()
  }
  return (
    <div className={styles.eventItemContainer}>
      <div className={styles.imageContainer}>
        <img src={isEventLiked ? filledHeart : emptyHeart} alt='filled heart icon' className={styles.filledHeart} onClick={handleHeartClick} />
        <img src={img} alt='event image' style={{ width: '200px' }} />
      </div>
      <div className={styles.eventInfoContainer}>
        <h4 className={styles.eventName}>{name} ({state})</h4>
        <p className={styles.eventInfo}>{info}</p>
        <button className={styles.seeMoreBtn} onClick={handleSeeMoreClick}>
          Detalles
        </button>
      </div>
    </div>
  )
}
export default EventItem
