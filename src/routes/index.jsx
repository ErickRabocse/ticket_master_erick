import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Details from '../views/Details'
import Error404 from '../views/Error404'
import ErrorBoundary from '../components/ErrorBoundary'
import Home from '../views/Home'
import LikedEvents from '../views/Profile/components/LikedEvents'
import MyInfo from '../views/Profile/components/MyInfo'
import Profile from '../views/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error404 />
  },
  {
    path: '/details/:eventId',
    element: (
      <Suspense fallback={<div>Cargando detalles ...</div>}>
        <ErrorBoundary fallback={<div>Ha ocurrido un error.</div>}>
          <Details />
        </ErrorBoundary>
      </Suspense>
    )
  },
  {
    path: '/profile',
    element: <Profile />,
    children: [
      {
        path: 'my-info',
        element: <MyInfo />
      },
      {
        path: 'liked-events',
        element: <LikedEvents />
      }
    ]
  }
])
const MyRoutes = () => <RouterProvider router={router} />
export default MyRoutes
