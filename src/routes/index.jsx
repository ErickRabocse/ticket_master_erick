import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../views/Home'
import Details from '../views/Details'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/details',
    element: <Details />
  }
])
const MyRoutes = () => <RouterProvider router={router} />

export default MyRoutes
