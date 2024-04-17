import React from 'react'

export default function BookingDates({openingHour , phone}) {
if(openingHour && phone){
    console.log(openingHour);
    console.log(phone);
}
  return (
    <div className='bookingDates'>
        <div className='cartItem d-flex justify-content-center gap-2'>
            <div className='parent d-flex justify-content-center gap-2'>
                <i class="fa-solid fa-phone-volume"></i>
                <div className='child'>
                    <h4>{phone}</h4>
                    <p>book an appointment</p>
                </div>
            </div>
            <div className='parent d-flex justify-content-center gap-2'>
                <i class="fa-solid fa-location-dot"></i>
                <div className='child'>
                    <h4>How to find us</h4>
                    <p>ADCB Building - Sharjah</p>
                </div>
            </div>
            <div className='parent d-flex justify-content-center gap-2'>
                <i class="fa-solid fa-clock"></i>
                <div className='child'>
                    <h4>Opening hours</h4>
                    <p>{openingHour}</p> 
                </div>
            </div>
            <div className='parent d-flex justify-content-center gap-2'>
            <i class="fa-solid fa-hospital-user"></i>
                <div className='child'>
                    <h4>Find a doctor</h4>
                    <p>Multi-lingual specialists</p>
                </div>
            </div>
        </div>
    </div>
  )
}
