import React, { useRef } from 'react'

const Layout = ({children}) => {

  return (
    <div className='container relative max-w-5xl w-full h-[80%]  overflow-y-scroll border border-white/10 mx-auto pt-5 sm:px-2'>
        {children}
    </div>
  )
}

export default Layout
