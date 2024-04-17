import { useEffect, useState } from "react"

export default function ProfileDocHook() {
const [data , setData] = useState('');
const [loading , setLoading] = useState(true);
useEffect(()=>{
      // get data api user 
      setLoading(true);
      const getData = async()=>{
        await fetch(`http://localhost:9800/OurDoctors`)
        .then(res => res.json())
        .then((data)=>{
          setData(data);
        })
      }
      getData();
      setLoading(false);
},[loading]);
return [data];
}
