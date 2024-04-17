import React, { useState ,useEffect} from 'react';
import BookingDates from '../../Uitily/bookingDates';

export default function SpecialtyEye() {
  const [specialtyDoctor , setSpecialty] = useState([]);
  // get data api user 
  useEffect(()=>{
  const getData = async()=>{
    await fetch(`http://localhost:9800/OurDoctors`)
    .then(res => res.json())
    .then((data)=>{
      setSpecialty(data);
    })
  }
  getData();
},[]);

const user = specialtyDoctor.find(item => item.specialty == "Eye");
let openingHours = "";
let phones = "";

if(user){
    console.log(user.title)
    openingHours = user.openingHours;
    phones = user.phone;
}

  return (
    <div>
    <div className='specialtyCard'>
      <h4 className="text-center">Specialty Eye</h4>
    </div>
    <div className='container'>
    {
        user ? (
          <div key={user.id} className="card mt-3" style={{width:"300px"}}>
              <img class="card-img-top" src={user.image} alt="Card image cap" style={{width:"300px"}}/>
              <div class="card-body">
                  <h5 class="card-title">Dr.{user.title}</h5>
                  <h5 class="card-title">experience {user.experience}</h5>
                  <h5 class="card-title">specialty {user.specialty}</h5>
                  <h5 class="card-title">form {user.form}</h5>
              </div>
          </div>
        ):
        <h5> not any doctor in the specialty</h5>
    }
      <BookingDates openingHour={openingHours} phone={phones}/>
      </div>
  </div>
  )
}
