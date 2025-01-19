import React from 'react'
import logo from '../assets/logo.png'


function Navbar() {
  return (
    <div>
      <div className='my-4 bg-white h-[60px] m-4 rounded-lg gap-4 flex justify-center items-center'>
        <img src={logo} alt="" />
        <h1 className='text-2xl font-medium'>FireBase Contact App</h1>
      </div>
      
    </div>
  )
}

export default Navbar