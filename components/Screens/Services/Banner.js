import React from 'react'
import Image from 'next/image'
const Banner = (props) => {
  return (
    <div className='container'>
      <div className='banner flex flex-wrap justify-between align-center px-20 py-5'>
        <div className='basis-[60%] font-bold flex flex-col justify-center'>
          <h1 className='text-5xl'>{props.title}</h1>
        </div>
        <div className='basis-[40%] flex flex-col justify-center'>
          <Image
            src={props.imgurl}
            alt={props.title}
            width={203}
            height={261}
            priority
            unoptimized
            loading='eager'
            className='max-w-[100%] w-[150px]  md:w-[203px] ml-auto object-contain'
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
