import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const TechBanner = ({ data, imgDom }) => {
  return (
    <div className='container spacing '>
      <div className='grid grid-cols-2 h-full place-items-center'>
        <div className='lg:pr-24 pr-12 '>
          <h1 className='xl:text-5xl md:text-3xl text-xl font-bold text-black mb-4'>
            {data[0].field_home_banner_title}
          </h1>
          <p className='lg:text-1xl text-base font-bold text-[#dc248b] mb-3'>
            {data[0].field_home_page_subheading}
          </p>
          <div className='flex w-full items-start text-center flex-wrap lg:gap-8 gap-2'>
            <Link
              className='md:p-4 p-2 lg:text-lg inline-block lg:w-52 w-40 text-base font-bold text-white bg-[#5856d6] rounded border-2 border-[#5856d6]'
              href='/contact'
            >
              {data[0].field_home_banner_link}
            </Link>
            <Link
              className='md:p-4 p-2 lg:text-lg text-base inline-block lg:w-52 w-40 font-bold bg-[#bcbbe07f] rounded border-2'
              href='/contact'
            >
              {data[0].field_home_banner_know_more_link}
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={`${imgDom}${data[0].field_home_banner_image}`}
            width={1920}
            height={500}
            alt={data[0].field_home_banner_title}
          />
        </div>
      </div>
    </div>
  )
}

export default TechBanner