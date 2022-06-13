import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios'
import logincss from './Login.module.css';


function Register(){
    const[EmpName,setEmpName]=useState("")
    const[EmpPhoneNum,setEmpPhoneNum]=useState("")
    const[EmpUsername,setEmpUsername]=useState("")
    const[EmpPassword,setEmpPassword]=useState("")

    const SignUp = () => {
        axios.post("http://localhost:3001/insert", {EmpName:EmpName,EmpPhoneNum:EmpPhoneNum,EmpUsername:EmpUsername,EmpPassword})
    }

    return ( 


<body>
        <div className={logincss.wrapper}>
            <div class="navmenu"><nav>
                
               {/* <a href="landing.html">Home</a>
                <a href="employee.html">Team</a>
                <a href="#">Contact</a>
    <a href="register.html">Register</a> */}
        </nav></div>
    <div class="flex-container"/>
        <div class="log">
            <center>
                <h1>
                    Sign Up
                </h1>
                <p>Sign Up to your account</p> 
            </center>
            
        </div>
        <div class="login">
            <form action="">
                <input type="text" name="EmpName" id="" placeholder="Name" onChange={(event)=>{setEmpName(event.target.value)}}/><br/>
                <input type="text" name="EmpPhoneNum" id="" placeholder="Phone number" onChange={(event)=>{setEmpPhoneNum(event.target.value)}}/><br/>
                <input type="text" name="EmpUsername" id="" placeholder="Username" onChange={(event)=>{setEmpUsername(event.target.value)}}/><br/>
                <input type="password" name="EmpPassword" id="" placeholder="Password" onChange={(event)=>{setEmpPassword(event.target.value)}}/><br/>

                <a href="login.html">Login</a>
                <button onClick={SignUp}>Sign Up</button>
            </form>
        </div>
    </div>
    
</body>

    );
}

export default Register;