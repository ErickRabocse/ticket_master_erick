import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../views/Home'
import Details from '../views/Details'
import Error404 from '../views/Error404'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error404 />
  },
  {
    path: '/details/:eventId',
    element: <Details />
  }
])
const MyRoutes = () => <RouterProvider router={router} />

export default MyRoutes
