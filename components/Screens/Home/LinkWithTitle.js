import React from 'react'
import Link from 'next/link'

const LinkWithTitle = ({ data }) => {
  return (
    <div className=' bg-[#dc248b] '>
      <div className='flex container spacing mountains-white relative'>
        <div className='w-[52%]'>
          <h1 className='font-bold 2xl:text-4xl xl:text-3xl text-1-xl  text-white items-baseline'>
            {data[0].field_help_agencies_title}
          </h1>
        </div>
        <div className='w-[40%] text-end mt-16'>
          <Link
            href='/contact'
            className='py-3 px-3 font-medium xl:text-1-xl lg:text-1xl text-lg  border-2 rounded text-white'
          >
            {data[0].field_agencies_link}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LinkWithTitle
