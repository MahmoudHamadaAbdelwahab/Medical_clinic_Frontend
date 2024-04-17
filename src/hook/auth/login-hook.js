import { useEffect, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import notify from '../../notify/notify';

export default function LoginHook() {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [item , setItem] = useState([]);
    const [loading , setLoading] = useState(true);
    const navigate = useNavigate();

    const onChangeEmail = (e)=>{
        setEmail(e.target.value);
    }
    const onChangePassword = (e)=>{
        setPassword(e.target.value);
    }
    const validate = ()=>{
        let result = true;
        if(email === "" || email === null){
            result = false;
            notify("please enter email","warn");
        }
        if(password === "" || password === null){
            result = false;
            notify("please enter password","warn");
        }
    };

    const proceedLogin = async ()=>{
        // validate
        validate();
        // get data api user 
        setLoading(true);
        await fetch(`http://localhost:9800/user`)
        .then(res => res.json())
        .then((data)=>{
            setItem(data);
        })
        setLoading(false);
    }
    
    useEffect(()=>{
    if(loading === false){

        if(item){
            const user = item.find(user => user.email === email && user.password === password );
            if (user) {
              console.log('Login successful:', user.name);
              notify("successfully registered","success");
              localStorage.setItem("login",JSON.stringify(user));
              setTimeout(()=>{
                navigate('/');
              },1500);
            } 
            else {
                localStorage.removeItem("login");
                notify("Registration error","warn");
            }
        }
    }
   },[loading])

    return [email , onChangeEmail , password , onChangePassword , proceedLogin];
}
