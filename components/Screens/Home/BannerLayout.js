import React from 'react'
import Link from 'next/link'
import urlExtractor from 'utils/urlExtractor'

export default function BannerLayout({ data, imgDom }) {
  const bannerImageUrl = `${imgDom}/${data[0]?.field_home_banner_image}`

  return (
    <header
      className='flex h-[80vh] bg-no-repeat lg:bg-center bg-right bg-cover relative'
      style={{
        backgroundImage: `url(${bannerImageUrl})`,
      }}
    >
      <div className='container flex lg:items-center items-end'>
        <div className='p-6 md:p-0 w-full md:w-1/2 lg:mb-0 md:mb-16 mb-8'>
          <h1 className='font-light text-white lg:w-[80%] w-full 2xl:text-[4.5rem] xl:text-[3.5rem] text-1xl leading-snug'>
            {data[0]?.field_home_banner_title}
          </h1>
          <div className='banner_link flex justify-start lg:pt-8 pt-4 gap-9'>
            <Link
              href='/contact'
              className='text-white text-center font-light lg:text-[1.25rem] md:text-lg text-base border hover:border-1 hover:border-white border-white hover:bg-white hover:text-black transition-all duration-200 ease-in p-4 rounded'
            >
              {data[0]?.field_home_banner_link}
              <span className='inline ml-2'>➔</span>
            </Link>
            <Link
              href='/contact'
              className='text-white text-center border font-light lg:text-[1.25rem] md:text-lg text-base hover:bg-white hover:text-black border-white hover:border-white p-4 transition-all duration-200 ease-in rounded'
            >
              {data[0]?.field_home_banner_know_more_link}
              <span className='inline ml-2'>➔</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
