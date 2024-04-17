import { useState } from "react"
import notify from "../../notify/notify";
import { useNavigate } from "react-router-dom";

export default function AppointmentHook() {
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [phone,setPhone] = useState(0);
    const [email,setEmail] = useState('');
    const [category , setCategory] = useState('');
    const [message , setMessage] = useState('');

    const handleName =(e)=>{
        setName(e.target.value)
    }
    const handlePhone =(e)=>{
        setPhone(e.target.value)
    }
    const handleEmail =(e)=>{
        setEmail(e.target.value)
    }
    const handleCategory =(e)=>{
        setCategory(e.target.value)
    }
    const handleMessage =(e)=>{
        setMessage(e.target.value)
    }

    const validationValues=()=>{
        if (name === "") {
            notify("من فضلك ادخل اسم المستخدم", "error")
            return;
        }
        if (phone.length <= 10) {
            notify("من فضلك ادخل رقم هاتف صحيح", "error")
            return;
        }
    };

    const OnSubmit= async ()=>{
        validationValues();
         await fetch(`http://localhost:9800/appointment`,{
          method:'POST',
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({
            name,email,phone,category,message
          })
        })
        .then(res=>res.json())
        .then(data=>{
          navigate('/profileUser');
          localStorage.setItem("appointment",JSON.stringify(data));
         console.log(data)});
        };

    return [name , handleName , phone , handlePhone , email , handleEmail , category , handleCategory , message , handleMessage , OnSubmit];
}
