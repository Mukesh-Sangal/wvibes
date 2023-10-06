import React from 'react'
import Image from 'next/image'
const AboutUs = ({data}) => {
  return (
    <div className='container spacing bg-white'>
      <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-28 gap-14'>
        <div className=' text-center'>
          <h1 className='text-3xl font-bold text-black  pb-6'>
            {data[0].field_title}
          </h1>
          <h2 className='text-1xl font-medium px-12'>{data[0].field_desc}</h2>
        </div>
        <div className='w-full'>
          <Image
            unoptimized
            className=''
            src={`http://free.lndo.site:8000/${data[0].field_lets_build_image}`}
            width={1920}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUs