import React from 'react'
import Image from 'next/image'
const Banner = (props) => {
  return (
    <div className='container'>
      <div className='banner flex flex-wrap justify-between align-center  lg:py-28 py-14'>
        <div className='basis-[60%] font-bold flex flex-col justify-center'>
          <h1 className='lg:text-4xl md:text-3xl text-1-xl'>{props.title}</h1>
        </div>
        <div className='basis-[40%] flex flex-col justify-center'>
          <Image
            src={props.imgurl}
            alt={props.title}
            width={203}
            height={261}
            priority
            loading='eager'
            className='max-w-[100%] w-[100px]  md:w-[200px] lg:ml-28 ml-12 object-contain'
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
