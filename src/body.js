import React, { useState } from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import './nav.css'
import swal from 'sweetalert'
function Body() {

    const[name,setname]= useState('')
    const[username,setusername]= useState('')
    const[password,setpassword]= useState('')

function registeruser(event) {
    event.preventDefault();

    let users = JSON.parse(localStorage.getItem('users') || "[]")
    let newuser ={
        name:name,
        username:username,
        password:password
    }
    users.push(newuser)

    localStorage.setItem('users', JSON.stringify(users))

    alert('msg')
}

    return <div className='row justify-content-center'>
        
         <div className='col-md-6'>
            <img src="https://waichung2848t.files.wordpress.com/2012/11/fb-connection.jpg"/>
            </div>
            <div className='col-md-3'>
            <h1>Register</h1>
<form onSubmit={registeruser}>
            <input type='text' placeholder='name' className='form-control' value ={name} 
                 onChange={(e)=>{setname(e.target.value)}}/>
            <input type='text' placeholder='Username' className='form-control' value ={username} 
                 onChange={(e)=>{setusername(e.target.value)}}/>
                 <input type='text' placeholder='password' className='form-control' value={password}
                 onChange={(e)=>{setpassword(e.target.value)}}/>
                 
                 <button className ='btn btn-primary'>Register</button>
                 </form>

            </div>
           
        </div>

      
    
}
export default Body;

