import React from 'react'
import {useState,useRef} from 'react'
import { useNavigate } from 'react-router'
import dice_one from '../assets/one.svg'
import dice_two from '../assets/two.svg'
import dice_three from '../assets/three.svg'
import dice_four from '../assets/four.svg'
import dice_five from '../assets/five.svg'
import dice_six from '../assets/six.svg'
import Rules from './Rules'

const dice = [dice_one, dice_two, dice_three, dice_four, dice_five, dice_six];



function Game() {

    const [showRules, setShowRules] = useState(false);
    const [score,setScore] = useState(0);
    const [image,setImage] = useState(dice[0]);
    const number = useRef(null);
    const selected = useRef(false);

    const selectNumber  = (e)=>{
        selected.current = true;
        const buttons = e.target.parentElement.children; 
        for (let button of buttons) { 
            button.style.backgroundColor = 'white'; button.style.color = 'black'; 
        }
        e.target.style.backgroundColor = 'black'; e.target.style.color = 'white';
        number.current = e.target.innerHTML; 
    }

    const rollDice = ()=>{
        if(selected.current){
            const random = Math.floor(Math.random()*6);
            setImage(dice[random]);
            if(random+1 === parseInt(number.current)){
                setScore(score+1);
            }
        }
        else{
            const error = document.createElement('p');
            error.textContent = 'Select a number first';
            error.style.color = 'red';
            document.querySelector('.division').appendChild(error);
            setTimeout(()=>{
                document.querySelector('.division').removeChild(error);
            },400);
        }
    }

    const resetScore = ()=>{
        setScore(0);
        setImage(dice[0]);
        number.current = null;
        selected.current = false;
        let htlmColl = document.querySelector('.Nums').children;
        let arr = Array.from(htlmColl);
        arr.forEach((element)=>{
            element.style.backgroundColor = 'white';
            element.style.color = 'black';
        });
    }

  return (
    <div> 
        <div className='flex flex-row justify-between items-center mx-20 my-4'>
            <div className='flex flex-col items-center'>
                <p className='text-5xl font-semibold'>{score}</p>
                <p className='text-bold'>Total Score</p>
            </div>
            <div className='flex flex-col items-center division' >
                <div className = "Nums">
                    <button className='border-black border-2 py-3 px-5 m-2 text-black bg-white font-bold' onClick={selectNumber}>1</button>
                    <button className='border-black border-2 py-3 px-5 m-2 text-black bg-white font-bold' onClick={selectNumber}>2</button>
                    <button  className='border-black border-2 py-3 px-5 m-2 text-black bg-white font-bold' onClick={selectNumber}>3</button>
                    <button  className='border-black border-2 py-3 px-5 m-2 text-black bg-white font-bold' onClick={selectNumber}>4</button>
                    <button  className='border-black border-2 py-3 px-5 m-2 text-black bg-white font-bold' onClick={selectNumber}>5</button>
                    <button  className='border-black border-2 py-3 px-5 m-2 text-black bg-white font-bold' onClick={selectNumber}>6</button>
                </div>
                <p className='font-bold'>
                    Select Number
                </p>
            </div>
        </div>
        <div className='flex flex-col items-center m-20'>
            <div>
                <img src={image} alt="Error" className='max-w-56 m-5' onClick={rollDice}/>
                <p className='font-semibold m-5 text-xl '>Click on the Dice to roll</p>
            </div>
            <div className='flex flex-col m-5'>
                <button className='m-2 border-black border-2 px-5 text-black font-semibold' onClick={resetScore}>Reset Score</button>
                <button className='m-2 bg-black text-white py-1' onClick={() => setShowRules((prev) => !prev)}>Show Rules</button>
            </div>
        </div>
        {showRules && <Rules />}
    </div>
  )
}

export default Game