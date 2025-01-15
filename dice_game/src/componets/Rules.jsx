import React from 'react'
import Game from './Game'

function Rules() {

  return (
    <div>
        <div className='flex flex-col justify-center items-center bg-yellow-100 mx-80 p-3'>
            <p className='text-2xl font-bold'>
                How to play the game
            </p>
            <br />
           <p>
                Select any Number 
                <br />
                Click on dice image
                <br />  
                after click on dice if selected number is equal to dice number you will get same points as dice if you get guess wrong then no points are awarded
            </p>
        </div>
    </div>
  )
}

export default Rules