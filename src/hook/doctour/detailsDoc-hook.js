import React , {useState , useEffect}from 'react';

export default function DetailsDocHook(id) {
  const [details , setDetails] = useState('');
  const [loading , setLoading] = useState(true);

  useEffect(()=>{
    // get data api user 
    setLoading(true);
    const getData = async()=>{
      await fetch(`http://localhost:9800/OurDoctors/${id}`)
      .then(res => res.json())
      .then((data)=>{
          setDetails(data);
      })
    }
    getData();
    setLoading(false);
  },[loading]);

  return[details]
}
