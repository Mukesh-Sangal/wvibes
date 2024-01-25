import React from 'react'
import Image from 'next/image'
const AboutUs = ({data}) => {
  return (
    <div className='container lg:py-24 py-14  bg-white'>
      <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-28 gap-14 items-center'>
        <div className='text-left'>
          <h1 className='md:text-3xl text-2xl font-bold text-black  pb-6'>
            {data[0].field_title}
          </h1>
          <h2 className='text-1xl font-medium '>{data[0].field_desc}</h2>
        </div>
        <div className='w-full'>
          <Image
            className=''
            src={`https://dev-growwives.pantheonsite.io/${data[0].field_lets_build_image}`}
            alt={data[0].field_title}
            width={1920}
            height={500}
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUs