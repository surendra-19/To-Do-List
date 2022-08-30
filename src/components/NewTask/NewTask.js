import React, { useState } from 'react';

function NewTask(){

    const [task,setTask]=useState('')
    const [tasks,setTasks]=useState([])
    const [show,setShow]=useState(false)

    const clickHandler=()=>{
        setTasks([...tasks,task])
        setTask('')
        setShow(false)
    }

    const newClick=()=>{
        setShow(true)
    }

    return(
        <>
        <div className='flex justify-center items-center h-[100vh]'>
            {show ?
                <>
                    <input type='text' placeholder='Enter your Task...' className='p-3 m-5 rounded-xl border border-black' value={task} onChange={(e)=>setTask(e.target.value)} />
                    <button  className='bg-red-500 text-white font-semibold p-3 hover:bg-red-700 drop-shadow-md rounded-xl' onClick={clickHandler} >Add</button>
                </>
                :
                <div className ='flex flex-col  justify-center items-center h-[100vh] ' >
                    <button onClick={newClick} className='bg-red-500 text-white font-semibold p-3  drop-shadow-lg hover:bg-red-700 rounded-xl' >add a new task</button>
                    <br/>
                    <ul>
                        {
                            tasks.map((task)=><li>{task}</li>)
                        }
                    </ul>
                </div>    
            }
        </div>
        </>

    )
};
export default NewTask
