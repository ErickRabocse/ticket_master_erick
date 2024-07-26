import React from 'react'
import { Link, useNavigate, Outlet, useLocation } from 'react-router-dom' // 'Outlet' renders the children nested (inside the Profile component) in the 'router'.
import styles from './Profile.module.css'
import home from '../../assets/home.png'
const Profile = () => {
  const { pathname } = useLocation() // 'pathname' from useLocation, returns: The path of the current URL, which changes when "handleTablClick" of the tabs is clicked.
  const navigate = useNavigate()
  const handleTabClick = (path) => { // the 'path' is assigned dynamically when the tab is clicked due to the parameter passed: 'my-info' or 'liked-events'.
    navigate(`/profile/${path}`) // redirecting to the custom-path passed as parameter to display in the <Outlet /> the content of 'Mi información' or 'Eventos Favoritos'
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
