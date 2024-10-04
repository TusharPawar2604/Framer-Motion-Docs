import React from 'react'

const Background = () => {
  return (
   
    <>
   <div className='fixed h-screen w-full z-[2]'>
   <div className='absolute w-full p-12 text-center'>
        <h3 className='font-semibold text-zinc-400 text-xl'>Documents.</h3>
    </div>
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-[11vw] font-semibold tracking-tighter text-slate-950'>Docs.</h1>
    </div>
   </div>
    </>
  )
}

export default Background