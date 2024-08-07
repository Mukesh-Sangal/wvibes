import React from 'react'
import Image from 'next/image'
import { bgImg } from './BannerImage'
import Link from 'next/link'
import urlExtractor from 'utils/urlExtractor'

export default function BannerLayout({ data, imgDom }) {
  return (
    <div
      className='xl:h-[80vh] flex lg:h-[80vh] md:h-[60vh] h-[80vh] bg-no-repeat lg:bg-center bg-right bg-cover relative
'
style={{
        backgroundImage: `url(${imgDom}/${data[0].field_home_banner_image})`,
      }}
    >
      <div className='container flex lg:items-center items-end'>
        <div className='p-6 md:p-0 w-full md:w-1/2 lg:mb-0 md:mb-16 mb-8'>
          <h1 className='font-light text-white lg:w-[80%] w-full md:w-full 2xl:text-[4.5rem] xl:text-[3.5rem] text-1-xl leading-snug'>
            {data[0].field_home_banner_title}
          </h1>
          <div className='banner_link flex justify-start lg:pt-8 pt-4 gap-9 '>
            <Link
              href='/contact'
              className='text-white text-center font-light lg:text-[1.25rem] text-lg border hover:border-1    bg-[#DC248B]/0.4 hover:border-white border-white hover:bg-white hover:text-black transition-all duration-200 ease-in p-4 rounded'
            >
              {data[0].field_home_banner_link}
              <p className='inline ml-2'>➔</p>
            </Link>
            <Link
              href='/contact'
              className='text-white text-center border font-light lg:text-[1.25rem] text-lg bg-[#6A5ACD]/0.4 hover:bg-white hover:text-black border-white hover:border-white p-4 transition-all duration-200 ease-in rounded'
            >
              {data[0].field_home_banner_know_more_link}
              <p className='inline ml-2'>➔</p>
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
