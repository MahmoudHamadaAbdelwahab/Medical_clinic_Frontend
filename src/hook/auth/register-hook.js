import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import notify from '../../notify/notify';

export default function RegisterHook() {
        const [name , setName] = useState();
        const [password , setPassword] = useState();
        const [email , setEmail] = useState();
        const [phone , setPhone] = useState();
        const [confirmPassword , setConfirmPassword] = useState();
        const Navigate = useNavigate();
    
        const onChangeName = (e)=>{
            setName(e.target.value)
        }
        const onChangeEmail = (e)=>{
            setEmail(e.target.value)
        }
        const onChangePhone = (e)=>{
            setPhone(e.target.value)
        }
        const onChangePassword = (e)=>{
            setPassword(e.target.value)
        }
        const onChangeConfirmPassword= (e)=>{
            setConfirmPassword(e.target.value)
        }
    
        const validationValues = () => {
          if (name === "") {
              notify("من فضلك ادخل اسم المستخدم", "error")
              return;
          }
          if (phone.length <= 10) {
              notify("من فضلك ادخل رقم هاتف صحيح", "error")
              return;
          }
          if (password !== confirmPassword) {
              notify("من فضلك تاكيد من كلمه السر", "error")
              return;
          }
      }
        const OnSubmit= async ()=>{
          validationValues();
           await fetch(`http://localhost:9800/user`,{
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
              name,email,password,confirmPassword,phone
            })
          })
          .then(res=>res.json())
          .then(data=>{
            Navigate('/login');
            localStorage.setItem("login",JSON.stringify(data));
           console.log(data)});
        }

        return [name , onChangeName , email , onChangeEmail , phone ,onChangePhone , password , onChangePassword , confirmPassword, onChangeConfirmPassword ,OnSubmit]
}
