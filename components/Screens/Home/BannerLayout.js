import React from 'react'
import Image from 'next/image'
import { bgImg } from './BannerImage'
import Link from 'next/link'
import urlExtractor from 'utils/urlExtractor'

export default function BannerLayout({ data, imgDom }) {
  return (
    <div
      className='lg:h-[90vh] flex h-[80vh] bg-no-repeat bg-center bg-cover relative
'
      style={{
        backgroundImage: `url(${imgDom}/${data[0].field_home_banner_image})`,
      }}
    >
      <div className='container flex items-center'>
        <div className=' p-6 md:p-0 w-full md:w-1/2'>
          <h1 className='font-bold text-white lg:w-[80%] w-full md:w-full xl:text-4xl lg:text-3xl text-1-xl leading-snug'>
            {data[0].field_home_banner_title}
          </h1>
          <div className='banner_link flex justify-start lg:pt-8 pt-4 gap-9 '>
            <Link
              href='/contact'
              className='text-white text-center font-bold 2xl:text-1-xl border hover:border-1 lg:text-1xl text-base 2xl:w-80 md:w-56 w-36  bg-[#DC248B] hover:border-[#DC248B] border-[#dc248b] hover:bg-white hover:text-[#DC248B] transition-all duration-500 ease-in-out p-4  rounded'
            >
              {data[0].field_home_banner_link}
            </Link>
            <Link
              href='/contact'
              className='text-white text-center border font-bold 2xl:text-1-xl lg:text-1xl text-base 2xl:w-80 md:w-56 w-36 bg-[#6A5ACD] hover:bg-white hover:text-[#6A5ACD] border-[#6A5ACD] hover:border-[#6A5ACD] p-4 transition-all duration-500 ease-in-out  rounded'
            >
              {data[0].field_home_banner_know_more_link}
            </Link>
          </div>
        </div>
      </div>
      {/* <div className='digital-transformation absolute bottom-0 justify-center flex gap-8 left-0 w-full bg-[#009CDE] bg-opacity-50 p-4'>
        <h1 className='text-white xl:text-3xl lg:text-2xl md:text-1-xl text-lg font-bold text-center opacity'>
          {data[0].field_home_page_subheading}
        </h1>
        {data[0]?.field_banner_drupal_development && (
          <Link
            href={urlExtractor(data[0]?.field_banner_drupal_development)[1]}
            className='text-white xl:text-[38px] lg:text-2xl md:text-1-xl text-lg font-bold text-center opacity drupal-development relative'
          >
            {urlExtractor(data[0]?.field_banner_drupal_development)[0]}
          </Link>
        )}
        {data[0]?.field_banner_digital_transformat && (
        <Link
          href={urlExtractor(data[0]?.field_banner_digital_transformat)[1]}
          className='text-white xl:text-[38px] lg:text-2xl md:text-1-xl text-lg font-bold text-center opacity'
        >
          {urlExtractor(data[0]?.field_banner_digital_transformat)[0]}
        </Link>
        )}
      </div> */}
    </div>
  )
}
