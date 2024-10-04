import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoCloseCircle } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data, refrence}) => {
  
  
  return (
    <>
    <motion.div drag dragConstraints={refrence} whileDrag={{scale : 1.1}} className='relative h-72 w-56 bg-zinc-900/90 rounded-[45px] text-white px-5 py-10 overflow-hidden flex-shrink '>
        <FaRegFileAlt/>
        <p className='mt-5 leading-tight text-sm font-semibold'>{data.desc}</p>
        <div className='w-full absolute bottom-0 left-0'>
          <div className='mb-2 flex items-center justify-between px-8 py-3'>
            <h3>{data.size}</h3>
            <span>
              {data.close ? <IoCloseCircle size="1.5em" /> :  <MdDownloadForOffline size="1.5em"/>}
            </span>
          </div>
          {data.tag.isOpen && 
          <div className={`w-full ${data.tag.color === "blue" ? "bg-blue-600" : "bg-green-600"} h-12 flex items-center justify-center`}>
          <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
        </div>}
          
        </div>
    </motion.div>
    </>
  )
}

export default Card