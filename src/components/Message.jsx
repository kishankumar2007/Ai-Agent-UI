import React from 'react'
import logo from "../assests/ai_logo.jpg"
const Message = ({ role, message }) => {
    return (
        role === "Perfect AI" ? <div className='flex text-xs shrink-0 sm:text-sm items-center w-fit justify-center h-fit'>
            <div className='w-8 h-8 shrink-0 text-white flex items-center justify-center rounded-full border border-white/10 shadow shadow-white/4 m-1 text-base overflow-hidden'><img className='object-cover' src={logo}/></div>
            <div className='max-w-xl w-fit mr-2 text-white bg-gray-400/5 border border-white/10 p-1 rounded'>
                {message}
            </div>
        </div>
            :

            <div className='ml-auto right-10 flex mb-2 mt-2 text-xs sm:text-sm items-center w-fit justify-center h-fit'>
                <div className='max-w-3xl w-fit px-2 text-white bg-green-800/75 border border-white/10 p-1 rounded'>
                    {message}
                </div>
                <div className='w-8 h-8 text-white flex items-center justify-center rounded-full border border-white/10 shadow shadow-white/4 mx-4 text-base'>U</div>
            </div>

    )
}

export default Message
