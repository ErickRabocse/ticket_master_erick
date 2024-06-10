import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import styles from './Profile.module.css'
import home from '../../assets/home.png'

const Profile = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const handleTabClick = (path) => {
    navigate(`/profile/${path}`)
  }

  return (
    <div>
      <div className={styles.homeBtnContainer}>
        <Link to='/' className={styles.homeLink}>
          <img src={home} className={styles.homeBtn} />
        </Link>
      </div>

      <div style={{ margin: '50px 12px 30px' }}>
        <span
          className={`${pathname.includes('my-info') ? styles.active : ''} ${styles.tab}`}
          onClick={() => { handleTabClick('my-info') }}
        >
          Mi información
        </span>
        <span
          className={`${pathname.includes('liked-events') ? styles.active : ''} ${styles.tab}`}
          onClick={() => { handleTabClick('liked-events') }}
        >
          Eventos favoritos
        </span>
      </div>
      <Outlet />
    </div>
  )
}

export default Profile
