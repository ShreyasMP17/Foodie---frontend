import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../styles/login.css"

const Login = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    
    let navigate = useNavigate()

    let handleSubmit = (e)=>{
        e.preventDefault()
        let data = {email,password}
        axios.post("http://localhost:4000/login",data)
        .then((res)=>{ 
            if(res.data.message == 'login successfull'){
            navigate('/home')
            }else{
                alert(res.data.message)
            }
        })
    }
    

    return (
        <div className="mainy">
        <div className="login">
            <h1>LOGIN</h1>
            <div className="login_form ">
                <form action="" onSubmit={handleSubmit}>
                    <div className="email ">
                        <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" placeholder="enter email" />
                    </div>
                    <div className="password ">
                        <input type="password" className="form-control" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="enter your password" />
                    </div>
                    <div className="login_button m-3">
                        <button className="btn btn-success">Login</button>
                    </div>
                    <div className="signUp_button m-3">
                        <p>Are you a new user ?</p>
                        <Link to="/signup" className="btn btn-outline-success">Signup</Link>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}

export default Login;