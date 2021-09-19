import React, { useState } from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import './login.css'
import swal from 'sweetalert'
function Login() {

    const [newtask, setnewtask] = useState('')
    const [tasks, settasks] = useState([])

    function deletetask(index) {
        let duparray = [...tasks]
        duparray.splice(index, 1)
        settasks(duparray)
    }

    function addtask() {
        settasks([...tasks, newtask])
    }

    const taskslist = tasks.map((object, index) => {

        return <div className='row justify-content-center'>
            <h1 className='col-md-6 text-left'>{index + 1} {object}</h1>
            <button onClick={() => { deletetask(index) }} className='btn btn-danger col-md-1 m-1'>DELETE</button>
        </div>

    })
    // function addtask(event){
    //     event.preventDefault();
    //         swal('login successfilly','congratulations you are successfully Login','success')
    //     }


    return <div className='App'>
            <h1>Todo List</h1>
            <div className='row justify-content-center'>


                <input type='text' placeholder='newtask' className='mb-3 col-md-6 m-1' value={newtask}
                    onChange={(e) => { setnewtask(e.target.value) }} />

                <button onClick={addtask} className='btn btn-success col-md-1 m-1'>ADD</button>


            </div>
            {taskslist}
        </div>

       
    
}
export default Login;

