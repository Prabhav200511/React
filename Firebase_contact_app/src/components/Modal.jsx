import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {createPortal} from "react-dom"

const Modal = ({onClose,isOpen,children}) => {
  return createPortal(
    <div>
        {isOpen&&(
            <>
                <div className='m-auto relative z-50 min-h-[200px] max-w-[80%] bg-white p-4'> 
                    <div className='flex justify-end'>
                        <AiOutlineClose className="text-2xl cursor-pointer" onClick={onClose}  />
                    </div>
                    {children}
                </ div>
                <div className='absolute top-0 z-40 h-screen w-screen backdrop-blur' />
            </>
        )}
    </div>,
    document.getElementById("modal-root")
  )
}

export default Modal