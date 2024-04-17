import { useParams } from 'react-router-dom';
import DetailsDocHook from '../../hook/doctour/detailsDoc-hook';

export default function DetailsDoc() {
    const {id} = useParams();
    const [details] = DetailsDocHook(id);
/*
      "id": "7",
      "title": "abdo saad",
      "specialty": "dentist",
      "experience": "9 years experience",
      "form": "Emirates",
      "image": "https://t4.
*/
  return (
    <div className='text-center' style={{height:'580px'}}>
      <div className='mb-3'>
        <h3>details doctor</h3>
      </div>
      <div className='container'>
          <div className='profileDoc d-flex justify-content-center gap-2'>
            <div>
              <img src={details.image} 
              style={{ height:'50%'}}
              />
            </div>
            <div className='mt-5'>
              <h3>Dr. {details.title}</h3>
              <div className='text d-flex justify-content-center gap-3 mt-1'>
                <div>
                  <h4>form</h4>
                  <p>{details.form}</p>
                </div>
                <div>
                  <h4>specialty</h4>
                  <p>{details.specialty}</p>
                </div>
                <div>
                  <h4>experience</h4>
                  <p>{details.experience}</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
