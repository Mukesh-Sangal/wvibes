import React from 'react'
import Link from 'next/link'

const LinkWithTitle = ({ data }) => {
  return (
    <div className='bg-[#dc248b] '>
      <div className='flex container spacing mountains-white bg-cover relative'>
        <div className='w-[52%]'>
          <h1 className='font-bold 2xl:text-4xl xl:text-3xl text-1-xl  text-white items-baseline'>
            {data[0].field_help_agencies_title}
          </h1>
        </div>
        <div className='md:w-[40%] text-end 2xl:mt-12 mt-6 z-50'>
          <Link
            href='/contact'
            className='py-3 px-3 font-medium lg:text-[20px] text-xl border-2 rounded text-white hover:border-white hover:text-[#dc248b] hover:bg-white transition-all ease-out duration-500'
          >
            {data[0].field_agencies_link}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LinkWithTitle
