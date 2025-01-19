import React from 'react'
import profile from '../assets/profile.png'

const ContactNotFound = () => {
  return (
    <div className='flex flex-row justify-center items-center text-white text-2xl font-semibold gap-4'>
        <img src={profile} alt="" />
        <h3>Contact Not Found</h3>
    </div>
  )
}

export default ContactNotFound