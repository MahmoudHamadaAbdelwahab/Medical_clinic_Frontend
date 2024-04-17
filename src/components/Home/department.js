import React, { useEffect, useState } from 'react'
export default function Department() {
    const [pro, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{  
        getAllProduct();
    },[loading]);
    // get all product 
    const getAllProduct = async()=>{
     await fetch('http://localhost:9800/OurDepartment')
      .then((res)=>res.json())
      .then((data)=>{setProduct(data)})
      .catch(rejected => {
        console.log(rejected);
      });
    }

    return (
    <div className='department text-center mt-3 mb-3'>
        <div className="container">
            <h1>Our Department</h1>
            <div className='row'>
                <div className='cart d-flex flex-direction-row mt-2'>
                    {
                        pro ? pro.map((item)=>{
                            return(
                                <div key={item.id} className='justify-content-center col-sm-2 col-md-2 col-lg-2'>
                                    <img src={item.image}/>
                                    <h4>{item.name}</h4>
                                </div>
                            )
                        }):<h1>not found department now</h1>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
