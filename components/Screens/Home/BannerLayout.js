import React from 'react'
import Image from 'next/image'
import {bgImg} from './BannerImage'
import Link from 'next/link'

export default function BannerLayout({ data }) {
  // console.log(data, 'Services Page');
  return (
    <div
      className='lg:h-[90vh] flex h-screen bg-no-repeat bg-cover relative
'
      style={{ backgroundImage: bgImg }}
    >
      <div className='container flex items-center'>
        <div className=' p-6 md:p-0 w-full md:w-1/2  xl:w-2/5'>
          <h1 className='font-bold text-white w-8/12 md:w-full xl:text-4xl lg:text-3xl md:text-2xl text-1-xl leading-snug'>
            {data[0].field_home_banner_title}
          </h1>
          <div className='banner_link flex justify-start lg:pt-8 pt-4 gap-9 '>
            <Link
              href='/contact'
              className='text-white text-center font-bold 2xl:text-1-xl lg:text-1xl text-base 2xl:w-80 md:w-56 w-36  bg-[#DC248B] p-4  rounded'
            >
              {data[0].field_home_banner_link}
            </Link>
            <Link
              href='/contact'
              className='text-white text-center font-bold 2xl:text-1-xl lg:text-1xl text-base 2xl:w-80 md:w-56 w-36 bg-[#6A5ACD] p-4  rounded'
            >
              {data[0].field_home_banner_know_more_link}
            </Link>
          </div>
        </div>
      </div>
      <div className='digital-transformation absolute bottom-0 left-0 w-full bg-[#009CDE] bg-opacity-25 p-8'>
        <h1 className='text-white xl:text-3xl lg:text-2xl md:text-1-xl text-lg font-bold text-center opacity'>
          {data[0].field_home_page_subheading}
        </h1>
      </div>
    </div>
  )
}
