import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className=" p-4 flex flex-wrap justify-around bg-red-500 text-white font-semibold">
        <div>
          <Link  className='hover:text-black' to='/'>Home</Link>
        </div>
        <div className='space-x-10'>
          <Link  className='hover:text-black'  to='/pending'>Pending Tasks</Link>
          <Link  className='hover:text-black' to='/finished' >Finished Tasks</Link>
        </div>
    </div>
  )
}

export default Navbar