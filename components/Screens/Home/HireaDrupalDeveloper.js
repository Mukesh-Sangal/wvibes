import Link from 'next/link'
import React from 'react'

const HireaDrupalDeveloper = ({data}) => {
  return (
    <div className='container lg:py-28 py-12 justify-between flex lg:flex-nowrap flex-wrap xl:gap-0 gap-6'>
      <div className='flex lg:w-[48%] justify-between flex-wrap items-baseline lg:flex-col'>
        <div className='md:w-auto lg:w-[60%] w-full'>
          <h1 className='font-bold xl:text-4xl md:text-2xl text-1-xl'>
            {data[0].field_cta_section_heading}
          </h1>
        </div>
        <div className='lg:mt-0 mt-8'>
          <Link
            className='py-3 px-3 font-medium lg:text-1-xl text-1xl  border-2 rounded border-[#000]'
            href='/contact'
          >
            {data[0].field_cta_link}
          </Link>
        </div>
      </div>
      <div className='grid grid-cols-2 lg:w-[48%] w-full content-between lg:gap-y-8 2xl:gap-x-14 md:gap-y-8 gap-y-4 gap-x-8 lg:pt-0 pt-8'>
        {data.map((item, index) => (
          <div
            className='font-medium lg:text-1-xl text-1xl items-start'
            key={index}
          >
            {item.field_cta_subheading}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HireaDrupalDeveloper