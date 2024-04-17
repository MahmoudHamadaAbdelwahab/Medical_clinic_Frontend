import { Link } from 'react-router-dom';
import OurDocHook from '../../hook/doctour/ourDoc-hook';
import SpecialtyDoctors from './specialtyDoctors';

export default function OurDoctors() {

    const [doctors] = OurDocHook();

    return (
        <div className="OurDoctors ">
            <div className='textOurDoc'>
                <h4 className="text-center">Our Doctors</h4>
            </div>
            <div className="container mt-5 mb-5">
                    <div className='CartText mt-2 mb-2'>
                       <h3 className='mt-2'>Best doctors from Dcotors Medical Center</h3>
                       <p>Doctors Medical Center is overseen by a team of highly experienced healthcare experts from the Amina Healthcare Group. These professionals have meticulously selected each hospital and clinic in their portfolio based on rigorous quality benchmarks. Our commitment to clinical excellence and the delivery of ethical, high-quality healthcare is underscored by our adherence to stringent quality assurance standards. Regardless of whether you’re an outpatient or a day case patient, you can have complete confidence in the care provided by our skilled clinical team. They are devoted to ensuring that you receive optimal treatment and achieve a swift recovery.</p>
                    </div>
                    <div className='d-flex justify-content-center gap-5'>
                        {/* get data from backend api */}
                        <div className='SpecialDoc col-sm-9 col-md-9 col-lg-9'>
                            <div className='text-SpecialDoc'>
                              <h3>Our new doctors</h3>
                            </div>
                            <div className='d-flex gap-4 flex-wrap mt-2 my-2'>
                                    {doctors.length > 0 ? (
                                        doctors.map((doctor, index) => (
                                            <div key={index} className="card" style={{width:"300px"}}>
                                                <img class="card-img-top" src={doctor.image} alt="Card image cap"/>
                                                <div class="card-body">
                                                    <h5 class="card-title">d / {doctor.title}</h5>
                                                    <h5 class="card-title">specialty /{doctor.specialty}</h5>
                                                    {/* <a href="/detailsDoc/:id" class="btn btn-primary">more then</a> */}
                                                    <Link to={`/detailsDoc/${doctor.id}`} class="btn btn-primary">more then</Link>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <h3>No doctors found</h3>
                                    )}
                            </div>
                        </div>
                        <div className='col-sm-3 col-md-3 col-lg-3'>
                        <SpecialtyDoctors/>
                        </div>
                    </div>
            </div>
        </div>
    );
}
