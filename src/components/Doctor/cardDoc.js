import React from 'react'
import img from "./../../img/gallery/IconFindADoc.png"
import img1 from "./../../img/gallery/online-medical-service_12630661.png"
import { Link } from 'react-router-dom'
export default function CardDoc() {
  return (
    <div className='cardDoc mt-5 my-3'>
      <div className='container'>
        <h1 className='text-center'>Recent BlogPost</h1>
        <div className='card'>

          <div className='findDoc'>
            <img src={img}/>
            <div className='text'>
              <h3>Find a doctor</h3>
              <p>A dedicated team of adept doctors prioritizes your needs, ensuring efficient and comprehensive treatment.</p>
              <button>
                <Link to="/findADoc">Find a doctor</Link>  
              </button>
            </div>
          </div>

          <div className='recentBlog'>
            <img src={img1}/>
            <div className='text'>
              <h3>Recent blogPost</h3>
              <p>Discover our newest offer encompassing all-inclusive medical amenities and healthcare provisions for you and your family.</p>
              <button>
              <Link to="/recentBlog">Recent blogPost</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
