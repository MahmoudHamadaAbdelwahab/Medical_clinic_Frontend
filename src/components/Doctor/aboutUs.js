import React from 'react'
import healthCare from '../../img/gallery/health-care.png'
export default function AboutUs() {
  return (
    <div className='about text-center mt-5' >
            <h3>About Us</h3>
        <div className='container'> 
            <div className='row'>
                 <div className='col-lg-7'>
                    <img src={healthCare} className="img-fluid mb-2"/>
                </div>
                <div className='text col-lg-5 mt-2'>
                    <h3 className='text'>We are developing a healthcare system around you</h3>
                    <p className='text-black'>
                        We think that everyone should have easy access to excellent
                        healthcare. Our aim is to make the procedure as simple as
                        possible for our patients and to offer treatment no matter
                        where they are — in person or at their convenience.
                    </p>
                    <button>learn more</button>
                </div>
            </div>
        </div>
    </div>
  )
}
