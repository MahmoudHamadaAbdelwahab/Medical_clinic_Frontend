import React from 'react'
import Slider from '../../components/Home/slider'
import Department from '../../components/Home/department'
import LiveDoc from '../../components/Doctor/liveDoc'
import CardDoc from '../../components/Doctor/cardDoc'
import Appointment from '../../components/Doctor/appointment'

export default function HomePage() {
  return (
    <div>
      <Slider/>
      <Department/>
      <CardDoc/>
      <Appointment/>
      <LiveDoc/>
    </div>
  )
}
