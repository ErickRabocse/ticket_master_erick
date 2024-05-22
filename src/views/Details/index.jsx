import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './Details.module.css'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

const Details = () => {
  const { eventId } = useParams() //  console.log(eventId)
  const [eventData, setEventData] = useState({})
  const [error, setError] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchEventsData = async () => {
      try {
        const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`)
        const data = await response.json()
        setEventData(data)
        setIsLoading(false)
      } catch (error) {
        setEventData({})
        setError(error)
        setIsLoading(false)
      }
    }
    fetchEventsData()
  }, [])
  console.log(eventData)

  if (isLoading && Object.keys(eventData === 0)) {
    <h1>The page is loading ...</h1>
  }
  if (Object.keys(error) > 0) {
    <h1>An error has occurred</h1>
  }
  return (
    <div className={styles.parentContainer}>
      <div className={styles.mainInfoContainer}>
        <img src={eventData?.images?.[0]?.url} alt={eventData?.name} className={styles.eventImage} />
        <h4 className={styles.eventName}>{eventData.name}</h4>
        <p className={styles.infoParagraph}>{eventData.info}</p>
        {eventData?.dates?.start?.dateTime ? <p className={styles.dateParagraph}> {format(new Date(eventData?.dates?.start?.dateTime), 'd LLLL yyyy H:mm', { locale: es })} hrs.</p> : null}
      </div>
      <div className={styles.seatInfoContainer}>
        {eventData?.seatmap?.staticUrl ? <><h6 className={styles.eventMapTitle}>Event map</h6> <img className={styles.seatMapImage} src={eventData?.seatmap?.staticUrl} alt='Event map' /></> : null}
        <p className={styles.pleaseNoteLegend}>{eventData.pleaseNote}</p>
        <p className={styles.priceRangeLegend}>Price range: {eventData?.priceRanges?.[0]?.min} - {eventData?.priceRanges?.[0]?.max} {eventData?.priceRanges?.[0]?.currency}</p>
      </div>
      <div className={styles.buyTicketsContainer}>
        <a href={eventData?.url} className={styles.buyTicketsLink}>Get your tickets</a>
      </div>
    </div>
  )
}
export default Details
