import React from 'react'
import {Container} from 'react-bootstrap'
import Appointment from '../Doctor/appointment'
import BookingDates from './bookingDates'
export default function ContactUs() {
  return (
    <div className='ContactUS'>
            <div className='textCart'>
              <h4>Contact US</h4>
            </div>
        <Container>
            <BookingDates/>
            <Appointment/>
        </Container>
    </div>
  )
}
