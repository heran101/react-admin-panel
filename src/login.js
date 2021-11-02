import axios from "axios";
import { useState } from "react";
const Login = ({setLoggedIn}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isError,setIsError] = useState(false);

    const data = {
        email,
        password
    }
    const login = () =>{
        
        axios.post("https://quiz.augmentedrealityethiopia.com/api/auth/login",data)
        .then(
            (res) =>{
                
                localStorage.setItem("user",JSON.stringify(res.data.user))
                setLoggedIn(true);
                
            })
        .catch(
            (err)=>{
                console.log("err",err);
                setIsError(true);
            }
        )
    }
    return ( 
        <>
            <input placeholder="email" onChange={(ev)=>{setEmail(ev.target.value)}} />
            <input type="password" 
            placeholder="password" 
            onChange={(ev)=>{setPassword(ev.target.value)}}/>
            <button onClick={login}>login</button>
        <p>
            {isError && <span>error</span> }
        </p>
        </>
     );
}
 
export default Login;