import React from 'react'
import styles from './Error404.module.css'
// useRouterError contains information about the error, such as status, message, etc.
import { useRouteError } from 'react-router-dom'
// This component is used in the route-Home --> errorEelement
const Error404 = () => {
  const error = useRouteError()
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Oops {error.status}</h3>
      <p className={styles.description}>{error.data}</p>
    </div>
  )
}

export default Error404
