import React from 'react'
import Booking from '../components/Bookings/Booking.jsx'
import {Outlet} from 'react-router-dom'
function Bookings() {
  return (
    <>
    <Booking/>
    <Outlet/>
    </>
  )
}

export default Bookings
