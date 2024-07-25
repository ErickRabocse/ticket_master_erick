/* eslint-disable jsx-quotes */
// IMPORT styles, like hook & heart images (from assets)
import styles from './EventItem.module.css'
import useLikeEvents from '../../../../hooks/useLikeEvents'
import filledHeart from '../../../../assets/filled-heart.png'
import emptyHeart from '../../../../assets/empty-heart.png'
// This component carries all values extracted from events (prev-fetched)
const EventItem = ({ info, id, name, img, onEventClick, state }) => {
  // Destructured elements returned by custom-hook-useLikeEvents which requires an (id)
  const { isEventLiked, toggleEventLike } = useLikeEvents(id)
  // Fn passed to --> native-onClick in "Detalles"-btn which calls
  // --> onEventClick(id)-fn passed as prop to main-component which invokes
  // --> handleEventClick-fn declared-in-parent-component that navigates to
  // --> details-page with the id-passed!
  const handleSeeMoreClick = (e) => {
    e.stopPropagation()
    onEventClick(id)
  }
  // Fn passed to --> native-onClick in "heart"-img which calls
  // --> toggleEventLike-fn imported from useLikeEvents(id)-fn which likes/unlikes events
  const handleHeartClick = () => {
    toggleEventLike()
  }

  return (
    <div className={styles.eventItemContainer}>
      <div className={styles.imageContainer}>
        <img
          src={isEventLiked ? filledHeart : emptyHeart}
          alt="filled heart icon"
          className={styles.filledHeart}
          onClick={handleHeartClick}
        />
        <img src={img} alt="event image" style={{ width: '200px' }} />
      </div>
      <div className={styles.eventInfoContainer}>
        <h4 className={styles.eventName}>
          {name} ({state})
        </h4>
        <p className={styles.eventInfo}>{info}</p>
        <button className={styles.seeMoreBtn} onClick={handleSeeMoreClick}>
          Detalles
        </button>
      </div>
    </div>
  )
}
export default EventItem
