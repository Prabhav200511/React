import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import useCurrInfo from '../hooks/useCurrencyInfo'

function App() {

  const [Amount,setAmount] = useState(0);
  const [from,setFrom] = useState("usd");
  const [to,setTo] = useState("inr");
  const [convertedAmount,setConvertedAmount] = useState(0);
  console.log(useCurrInfo(from));

  const currencyInfo = useCurrInfo(from)
  
  const options = Object.keys(currencyInfo)

  const swap = function(){
    setTo(from);
    setFrom(to);
    setConvertedAmount(Amount);
    setAmount(convertedAmount);
  }

  const convert = () =>{
    setConvertedAmount(Amount*currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat text-black"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/29821041/pexels-photo-29821041/free-photo-of-monochrome-view-of-big-ben-and-parliament.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <Input
                            label="From"
                            amount={Amount}
                            currOption={options}
                            onCurrChange={(currrency)=>setFrom(currrency)}
                            onAmountChange={(Amount)=>setAmount(Amount)}
                            selectCurr={from}
                            value = {Amount}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Input
                            label="To"
                            amount={convertedAmount}
                            currOption={options}
                            onCurrChange={(currrency)=>setTo(currrency)}
                            selectCurr={to}
                            value = {convertedAmount}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from} to {to}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
