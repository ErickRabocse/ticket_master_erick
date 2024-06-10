import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styles from './Details.module.css'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import home from '../../assets/home.png'

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
        <section className={styles.heroContainer}>
          <div className={styles.homeBtnContainer}>
            <Link to='/'>
              <img src={home} className={styles.homeBtn} />
            </Link>
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

// import styles from './Details.module.css'
// import { format } from 'date-fns'
// import { es } from 'date-fns/locale'
// import eventFetcher from '../../utils/fetchEvents'
// const pathname = window.location.pathname
// const resource = eventFetcher(pathname.substring(8, pathname.length))

// const Details = () => {
//   const eventData = resource.eventDetail.read()
//   return (
//     <div className={styles.parentContainer}>
//       <div className={styles.mainInfoContainer}>
//         <section className={styles.heroContainer}>
//           <img src={eventData?.images?.[0]?.url} alt={eventData?.name} className={styles.eventImage} />
//           <div className={styles.heroInfoSection}>
//             <div>
//               <img src={eventData?.images?.[0]?.url} alt={eventData?.name} className={styles.heroImageSmall} />
//             </div>
//             <div className={styles.heroInfoDetails}>
//               <h4 className={styles.eventName}>{eventData.name}</h4>
//               <p className={styles.place}>{eventData._embedded?.venues[0].state.name} - {eventData._embedded?.venues[0].name}</p>
//               {eventData?.dates?.start?.dateTime ? <p className={styles.dateParagraph}> {format(new Date(eventData?.dates?.start?.dateTime), 'd LLLL yyyy H:mm', { locale: es })} hrs.</p> : null}
//               <p className={styles.infoParagraph}>{eventData.info}</p>
//             </div>
//           </div>
//         </section>
//       </div>
//       <div className={styles.seatInfoContainer}>
//         {eventData?.seatmap?.staticUrl ? <><h6 className={styles.eventMapTitle}>Event map</h6> <img className={styles.seatMapImage} src={eventData?.seatmap?.staticUrl} alt='Event map' /></> : null}
//         <p className={styles.pleaseNoteLegend}>{eventData.pleaseNote}</p>
//         <p className={styles.priceRangeLegend}>Rango de precios: {eventData?.priceRanges?.[0]?.min} - {eventData?.priceRanges?.[0]?.max} {eventData?.priceRanges?.[0]?.currency}</p>
//       </div>
//       <div className={styles.buyTicketsContainer}>
//         <a href={eventData?.url} className={styles.buyTicketsLink}>Obtén tus boletos</a>
//       </div>
//     </div>
//   )
// }
// export default Details
