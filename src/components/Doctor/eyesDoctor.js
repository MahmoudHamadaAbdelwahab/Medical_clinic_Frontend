import React from 'react'
import eyeCare from '../../img/gallery/eye-care.png'
export default function EyesDoctor() {
  return (
    <div className='EyesDoctor text-center'>
      <div className='container d-flex justify-content-between mt-5'>
        <div className='row'>
          <div className='col-md-8 col-lg-6'>
              <img src={eyeCare} className='img-fluid'/>
          </div>
          <div className='col-md-4 col-lg-6 mt-5'>
              <h3>Eye Care with Top Professionals and In Budget</h3>
              <p>We've built a healthcare system that puts your needs first. For us, there is nothing more important than the health of you and your loved ones</p>
              <button>learn more</button>
          </div>
      </div>
      </div>
    </div>

  )
}
