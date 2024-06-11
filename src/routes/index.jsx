import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from '../views/Home'
import Details from '../views/Details'
import Error404 from '../views/Error404'
import ErrorBoundary from '../components/ErrorBoundary'

import Profile from '../views/Profile'
import MyInfo from '../views/Profile/components/MyInfo'
import LikedEvents from '../views/Profile/components/LikedEvents'

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
        <ErrorBoundary fallback={<div>Ha ocurrido un error al obtener el detalle.</div>}>
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
