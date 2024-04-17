import React from 'react'

export default function LiveDoc() {
  return (
    <div className='LiveDoc text-center mt-3'>
        <div className='container'>
            <div className='row d-flex justify-content-around text-center p-5'>
                <div className='col-sm-3 col-md-5 col-lg-3 text-md-start '>
                    <h3>liveDoc</h3>
                    <h5>The world's most trusted telehealth company</h5>
                </div>
                <div className='d-flex justify-content-around gap-2 flex-wrap col-sm-9 col-md-8 col-lg-9'>
                    <div className='LiveDocCart col-sm-3 col-md-3 col-lg-3'>
                        <h3>Departments</h3>
                        <div>
                            <h5>Eye care</h5>
                            <h5>Cardiac are</h5>
                            <h5>Heart care</h5>
                        </div>
                    </div>
                    <div className='LiveDocCart col-sm-3 col-md-3 col-lg-3'>
                        <h3>Membership</h3>
                        <div>
                            <h5>Free trial</h5>
                            <h5>Silver</h5>
                            <h5>Premium</h5>
                        </div>
                    </div>
                    <div className='LiveDocCart col-sm-3 col-md-3 col-lg-3'>
                        <h3>Customer Care</h3>
                        <div>
                            <h5>About Us</h5>
                            <h5>Contact US</h5>
                            <h5>Get Update</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
