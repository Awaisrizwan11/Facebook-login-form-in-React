import React, { useState } from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './nav.css'
import swal from 'sweetalert'
import {useHistory} from 'react-router-dom'
function Nav() {

    const[username,setusername]= useState('')
    const[password,setpassword]= useState('')
    const history= useHistory()

    function logout() {
        localStorage.removeItem('loggedin')
        history.push('/')
        window.location.reload(true)
    }

function login() {
    let users = JSON.parse(localStorage.getItem('users'))

    let x=0;

    for(let user of users){

        if(user.username===username && user.password===password){
            x++;
        }
    }
        if(x===1){
            alert('login success');
            localStorage.setItem('loggedin','loggedin')
            history.push('/dashboard')
            window.location.reload(true)
        }
        else{
            alert('invalid login')
        }
    }



    return <div>
    
        <div className='row nav'>
         <div className='col-md-6'>
            <h1>FACEBOOK</h1>
            </div>

            <div className='col-md-6'>

            {
                (()=>{
                    if(localStorage.getItem('loggedin')){
                        return <button onClick={logout} className='btn btn-danger'>logout</button>
                    }
                    else{
                        return <div>

                                    <input type='text' placeholder='Username' className='' value ={username} 
                                    onChange={(e)=>{setusername(e.target.value)}}/>
                                    <input type='text' placeholder='password' className='' value={password}
                                    onChange={(e)=>{setpassword(e.target.value)}}/>
                                    
                                    <button onClick={login} className ='btn btn-primary'>Login</button>


                        </div>
                    }

                })()
            }

           

            </div>
           
        </div>     
        </div>
}
export default Nav;

