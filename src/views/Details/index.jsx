import React from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const { eventId } = useParams()
  console.log(eventId)
  return (
    <div>
      Details view component
    </div>
  )
}

export default Details
