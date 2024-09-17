import React, { memo } from 'react'
import Image from 'next/image'

const Banner = memo(({ title, imgurl }) => {
  return (
    <div className='container md:pt-24 pt-16'>
      <div className='grid grid-cols-2 h-full place-items-center lg:mt-0 mt-8'>
        <div className='lg:pr-24 pr-4'>
          <h1 className='xl:text-4xl md:text-3xl text-xl font-bold text-black mb-4'>
            {title}
          </h1>
        </div>
        <div>
          <Image
            src={imgurl}
            alt={title}
            width={1920}
            height={500}
            priority // Use priority for important images
          />
        </div>
      </div>
    </div>
  )
})

export default Banner
