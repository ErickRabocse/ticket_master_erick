import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom' // 'useParams' --> to modify the route, 'Link' to redirect to a new page.
import styles from './Details.module.css'
import { format } from 'date-fns' // 'format' & 'es' --> to show the date
import { es } from 'date-fns/locale'
import home from '../../assets/home.png' // png icon-img

const Details = () => {
  const { eventId } = useParams() // 'eventId' was prev-declared in the 'router' & its value is assigned by the 'Events-EventItem'components!
  const [eventData, setEventData] = useState({}) // 'eventData' creates an empty-object that will store all the event data fetched by the API-call
  const [error, setError] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchEventsData = async () => {
      try { // API-call fetched when the details-page is requested by the "detalles"-btn in the eventItem component using the eventId from the Events
        const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${import.meta.env.VITE_TM_API_KEY}`)
        const data = await response.json()
        setEventData(data)
        setIsLoading(false)
      } catch (error) {
        setEventData({})
        setError(error)
        setIsLoading(false)
      }
    }
    fetchEventsData() // Executing the API-call
  }, [eventId])
  // Checking if 'eventData' hasn't loaded --> post loading message... & if 'error'-object has content --> show error message
  if (isLoading && Object.keys(eventData === 0)) {
    <h1>The page is loading ...</h1>
  }
  if (Object.keys(error) > 0) {
    <h1>An error has occurred</h1>
  }
  return ( // Finally return the component-content
    <div className={styles.parentContainer}>
      <div className={styles.mainInfoContainer}>
        <section className={styles.heroContainer}>
          <div className={styles.homeBtnContainer}>
            <Link to='/'><img src={home} className={styles.homeBtn} /></Link>
          </div>
          <img src={eventData?.images?.[0]?.url} alt={eventData?.name} className={styles.eventImage} />
          <div className={styles.heroInfoSection}>
            <div>
              <img src={eventData?.images?.[0]?.url} alt={eventData?.name} className={styles.heroImageSmall} />
            </div>
            <div className={styles.heroInfoDetails}>
              <h4 className={styles.eventName}>{eventData.name}</h4>
              <p className={styles.place}>{eventData._embedded?.venues[0].state.name} - {eventData._embedded?.venues[0].name}</p>
              {eventData?.dates?.start?.dateTime ? <p className={styles.dateParagraph}> {format(new Date(eventData?.dates?.start?.dateTime), 'd LLLL yyyy H:mm', { locale: es })} hrs.</p> : null}
              <p className={styles.infoParagraph}>{eventData.info}</p>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.seatInfoContainer}>
        {eventData?.seatmap?.staticUrl ? <><h6 className={styles.eventMapTitle}>Event map</h6> <img className={styles.seatMapImage} src={eventData?.seatmap?.staticUrl} alt='Event map' /></> : null}
        <p className={styles.pleaseNoteLegend}>{eventData.pleaseNote}</p>
        <p className={styles.priceRangeLegend}>Rango de precios: {eventData?.priceRanges?.[0]?.min} - {eventData?.priceRanges?.[0]?.max} {eventData?.priceRanges?.[0]?.currency}</p>
      </div>
      <div className={styles.buyTicketsContainer}>
        <a href={eventData?.url} className={styles.buyTicketsLink}>Obtén tus boletos</a>
      </div>
    </div>
  )
}
export default Details
