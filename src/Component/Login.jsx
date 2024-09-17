import { Cancel } from '@mui/icons-material'
import React, { useState } from 'react'
import { Md10K, MdOutlineCancel } from 'react-icons/md'

function login({setShowlogin}) {
    const [currState, setCurrState]= useState("Login")
  return (
    <div className='absolute z-[1]  grid' id='form'>
      <form action="">
        <div className="flex justify-between items-center text- font-bold">
            <h2>{currState}</h2>
            <Cancel onClick={()=>setShowlogin(false)} className='pointer w-4 h-4  text-purple-700 text-7xlxl'/>
        </div>
        <div className="flex flex-col gap-4">
          {currState==="Login"?<></>: <input type="text" placeholder='Your Name' required className='outline-none border h-9 rounded p-3'/>}
          <input type="email" placeholder='Your Email' required  className='outline-none border h-9 rounded p-3'/>
          <input type="password" placeholder='Password' required  className='outline-none border h-9 rounded p-3'/>
        </div>
        <button className='text-white bg-red-400 h-9 text-base font-semibold rounded'>{currState==="Sign Up"?"Create an Account":"Login"}</button>
        <div className="flex items-start gap-2 -mt-4">
          <input type="checkbox" className='mt-1'/>
          <p>By contiuing i agreed to the terms of use & privacy policy</p>
        </div>
        {currState==="Login"
        ?<p className=''>Create a new account? <span onClick={()=>setCurrState("Sign Up")} className='text-red-500 font-medium cursor-pointer'>Click here</span></p>
        :<p className=''>Already have an account <span onClick={()=>setCurrState("Login")} className='text-red-500 font-medium cursor-pointer'>Login</span></p>
      }
        
      </form>
    </div>
  )
}

export default login
