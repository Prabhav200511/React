import React,{useId} from 'react'

function Input({
    label,
    amount,
    onAmountChange,
    onCurrChange,
    currOption =[],
    selectCurr="usd",
    amountDisable = false,
    currDisable = false,
    className = "",
}) {
   
    const AmountId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label  htmlFor = {AmountId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={AmountId}
                    className="outline-none w-full bg-transparent py-1.5 "
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange && Number(onAmountChange(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurr}
                    onChange={(e) => onCurrChange && onCurrChange(Number(e.target.value))}
                    disabled={currDisable}
                >
                    
                        {currOption.map((currrency)=>(
                            <option key = {currrency} value={currrency}>{currrency}</option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default Input;