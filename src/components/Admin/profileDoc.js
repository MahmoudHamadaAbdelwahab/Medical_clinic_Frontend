import React from 'react'
import ProfileDocHook from '../../hook/Admin/profile-doc-hook';

export default function ProfileDoc() {
  const [data] = ProfileDocHook();
  if(data)
    console.log(data);
  return (
    <div className='text-center'>
        <h3>profile doctor</h3>
      <div className='container'>
          <div className='profileDoc d-flex justify-content-center'>
            <div>
              <img />
            </div>
            <div className=''>
              <h3>name doc</h3>
              <div className='text '>
                <div>
                  <h4>Nationality</h4>
                  <p>India</p>
                </div>
                <div>
                  <h4>Specialization</h4>
                  <p>Orthopaedics</p>
                </div>
                <div>
                  <h4>Languages spoken</h4>
                  <p>English, Hindi, Malayalam, Bengali, Telugu, Tamil</p>
                </div>
                <div>
                  <h4>Experience</h4>
                  <p>15 years</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
