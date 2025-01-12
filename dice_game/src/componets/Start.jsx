import React from 'react'
import img from '../assets/start_diceimg.svg'
import { useNavigate } from 'react-router'



function Start() {
    const navigate = useNavigate();
    
    function handleClick(){        
        navigate('/game')
    }

  return (
    <div className='flex flex-row justify-center items-center h-screen'>
        <div>
            <img src={img} alt="" />
        </div>
        <div>
        <h1 className='text-7xl font-bold'>
            DICE GAME
        </h1>
        <button onClick={handleClick} className='m-20 bg-black text-white px-5 py-2  rounded-xl'>Play Now</button>
        </div>
        
    </div>
  )
}

export default Start