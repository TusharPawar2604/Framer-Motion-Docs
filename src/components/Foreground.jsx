import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

  const ref = useRef(null)


  const data =[{
    desc : "This is the description of the data and this says hello bhai ",
    size : ".9mb",
    close :true,
    tag:{isOpen : true , tagTitle:"Download Now" , color:"blue"}
  },
  {
    desc : "This is the description of the data and this says hello bhai ",
    size : ".9mb",
    close :true,
    tag:{isOpen : true , tagTitle:"Download Now" , color:"blue"}
  },
  {
    desc : "This is the description of the data and this says hello bhai ",
    size : ".9mb",
    close :false,
    tag:{isOpen : true , tagTitle:"Upload Now" , color:"green"}
  },
  {
    desc : "This is the description of the data and this says hello bhai ",
    size : ".9mb",
    close :false,
    tag:{isOpen : true , tagTitle:"Upload Now" , color:"green"}
  },
  {
    desc : "This is the description of the data and this says hello bhai ",
    size : ".9mb",
    close :true,
    tag:{isOpen : true , tagTitle:"Upload Now" , color:"green"}
  }
]

  return (
    <>
    <div ref={ref} className='h-screen w-full left-0 top-0 fixed z-[3] flex gap-10 p-4 flex-wrap'>
     {data.map((item,index)=>(
    <Card data={item} key={index} refrence={ref} />
     ))}
    </div>
    </>
  )
}

export default Foreground