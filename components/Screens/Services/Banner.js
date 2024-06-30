import React from 'react'
import Image from 'next/image'
const Banner = (props) => {
  return (
    <div className='container lg:py-24 py-16'>
      <div className='grid grid-cols-2 h-full place-items-center lg:mt-0 mt-8'>
        <div className='lg:pr-24 pr-4 '>
          <h1 className='lg:text-4xl md:text-3xl text-xl font-bold text-black mb-4'>
            {props.title}
          </h1>
        </div>
        <div>
          <Image
            src={props.imgurl}
            alt={props.title}
            width={1920}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}

export default Banner