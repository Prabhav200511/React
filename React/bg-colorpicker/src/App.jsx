import { useState } from 'react'
import './App.css'



function App() {
  let [color,setColor] = useState("black")
  return (
    <>
    <div className=' w-screen h-screen max-w-full max-h-full ' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className=' flex flex-wrap justify-center bg-white rounded-3xl shadow-lg p-3 gap-3'>
            <button  className="outline-none py-1 px-4 rounded-full text-white shadow-lg"
              style={{backgroundColor: "red"}} onClick={()=>setColor("red")}>Red</button>
            <button  className="outline-none py-1 px-4 rounded-full text-white shadow-lg"
              style={{backgroundColor: "black"}} onClick={()=>setColor("black")}>Black</button>
            <button  className="outline-none py-1 px-4 rounded-full text-white shadow-lg"
              style={{backgroundColor: "green"}} onClick={()=>setColor("green")}>Green</button>
            <button  className="outline-none py-1 px-4 rounded-full text-white shadow-lg"
              style={{backgroundColor: "Blue"}} onClick={()=>setColor("blue")}>Blue</button>
          </div>
      </div>
      </div>
    </>
  )
}

export default App
