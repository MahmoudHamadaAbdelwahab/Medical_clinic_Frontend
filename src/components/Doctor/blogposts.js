import React, { useState , useEffect} from 'react'
import calendar from '../../img/gallery/calendar_747310.png'
export default function BlogPost() {
    const [pro , setPro] = useState([]);
    useEffect(()=>{
        const fetchData = async ()=>{
            await fetch('http://localhost:9800/RecentBlogpost')
            .then((res)=> res.json())
            .then((data)=>{setPro(data)})
            .catch((rejected)=>{
                console.log(rejected);
            })
        }
        fetchData();
    },[]);
    if(pro)
        console.log(pro)
      return (
        <div className='BlogPost text-center'>
            <div className='textBlogPost'>
                 <h4>Recent BlogPost</h4>
            </div>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='d-flex justify-content-center flex-wrap gap-2 mt-3'>
                        {
                            pro ?(
                                pro.map((item , index)=>{
                                    return(
                                        <div key={index} className='cart col-sm-6 col-md-3 col-lg-3'>
                                        <img src={item.image} class="w-100"/>
                                        <div>
                                            <div className='d-flex justify-content-between gap-3'>
                                                <h4>{item.name}</h4>
                                                <div className='d-flex justify-content-center gap-1'>
                                                    <img src={calendar} style={{width:'12px',height:'12px',marginTop:'8px'}}/>
                                                    <p>{item.date}</p>
                                                </div>
                                            </div>
                                            <div className='cartText'>
                                                <h4>{item.description.slice(0,100)}...</h4>
                                                <a href='#'>read full article</a>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })
                            ):<h3>not found any blog post</h3>
                        }
                    
                    </div>
                </div>
            </div>
        </div>
      )
    }
    