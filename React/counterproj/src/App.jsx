import { useState } from 'react'
import './App.css'


function App() {

  let [counter,setCounter] = useState(5);
  const addVal= function(){
    setCounter(counter+1);
  }

  function subVal(){
    if(counter>0)
    setCounter(counter-1);
    
  }

  return (
    <>
    <h1>Krishna Prabhav</h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addVal}> Add Value</button>
    <br /><br />
    <button onClick={subVal}> Remove Value</button>
    </>
  )
}

export default App
