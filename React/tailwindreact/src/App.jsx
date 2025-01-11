import { useRef } from 'react'
import './App.css'

function App() {
  let referencevariable = useRef(null);

  let fun = function(){
    referencevariable.current.click()
  }

  return (
    <>
      <button ref={referencevariable} onClick={console.log("Cutie bear")}>Click me</button> 
      <button onClick={()=>fun()}>2nd button</button>
    </>
  )
}

export default App
