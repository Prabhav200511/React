import { useState,useCallback,useEffect,useRef } from 'react'

function App() {

  let [length,setLength] = useState(8);
  let [no_bool,setNumber] = useState(false);
  let [char_bool,setChar] = useState(false);
  let [randompass,setRandompass] = useState("");

  let passwordRef = useRef(null);

  const passwordGen = useCallback(()=>{
    let pass = "";
    let str = "QWERTYYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if(no_bool){
      str+="0123456789";
    }
    if(char_bool){
      str+="!@#$%^&*(){}[]?/|";
    }
    let count=length;
    while(count--){
      let index = Math.floor((Math.random())*(str.length));
      pass+=str[index];
    }

    setRandompass(pass);
  },[length,no_bool,char_bool,setRandompass]);

  useEffect(()=>{passwordGen()},[length,no_bool,char_bool,passwordGen])

  function copyPasswordToClipboard(){
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(randompass);
  }

  return (

      <div className='flex-row w-full max-w-mb mx-auto shadow-md rounded-md px-4 my-8 text-white bg-gray-800 justify-center items-center '> 
        <h1 className='text-center m-2'>Password Generator</h1>
        <div className='flex shadow-md rounded-lg overflow-hidden mb-4'>
          <input type="text" value={randompass} className='outline-none w-full h-full py-1 px-3 bg-white my-4 text-black' 
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button className='outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0' onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={50}
            value ={length}
            className='cursor-pointer'
            onChange={(e)=>setLength(e.target.value)} />
            <label className='mx-1 my-2'>Length : {length}</label>
          </div>
          <div>
            <input className='m-2'
            type="checkbox"
            defaultChecked={no_bool}
            id = "numberInput"
            onChange={()=>{
              setNumber((prev)=>!prev)
            }} />
            <label >Numbers</label>
          </div>
          <div>
            <input className='m-2'
            type="checkbox"
            defaultChecked={char_bool}
            id = "symbolInput"
            onChange={()=>{
              setChar((prev)=>!prev)
            }} />
            <label >Symbols</label>
          </div>
        </div>
      </div>
  )
}

export default App
