import Link from 'next/link'
import React from 'react'

const HireaDrupalDeveloper = ({data}) => {
  return (
    <div className='container spacing flex lg:flex-nowrap flex-wrap xl:gap-0 gap-6'>
      <div className='flex justify-between lg:flex-col lg:w-auto	w-full'>
        <div className="md:w-auto w-[60%]">
          <h1 className='font-bold xl:text-4xl md:text-2xl text-1-xl'>
            {data[0].field_cta_section_heading}
          </h1>
        </div>
        <div>
          <Link
            className='py-3 px-3 font-medium xl:text-1-xl md:text-1xl text-lg  border-2 rounded border-[#000]'
            href='/contact'
          >
            {data[0].field_cta_link}
          </Link>
        </div>
      </div>
      <div class='grid grid-cols-2 content-between 2xl:gap-y-14 lg:gap-y-8 2xl:gap-x-14 md:gap-y-8 gap-y-4 gap-x-8 lg:pt-0 pt-8'>
        {data.map((item) => (
          <div className='font-medium lg:text-2xl md:text-1-xl text-1xl items-start'>
            {item.field_cta_subheading}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HireaDrupalDeveloper