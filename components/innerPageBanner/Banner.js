import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function BannerLayout({ data }) {
  //  console.log(data,'Banner Data')
  return (
    <div className='h-screen	relative banner '>
      <div>
        <Image
          unoptimized
          className='object-cover object-right-top h-screen'
          src={`http://free.lndo.site:8000` + data[0].field_home_banner_image}
          width={1920}
          height={1080}
        ></Image>
        <div className='inner-banner absolute top-1/3 p-6 md:p-0 md:inset-1/3 lg:top-1/4 xl:top-40 md:left-12 w-full md:w-1/2 lg:w-1/3 xl:w-2/5 2xl:w-1/4'>
          <h1 className='font-bold text-white w-8/12 md:w-full text-2xl lg:text-4xl xl:text-6xl leading-snug'>
            {data[0].field_home_banner_title}
          </h1>
          <div className='banner_link flex justify-start pt-8 gap-9'>
            <Link
              href={data[0].field_home_banner_link}
              className='text-white text-center font-bold text-lg bg-[#DC248B] p-4 w-64 rounded'
            >
              {data[0].field_home_banner_link}
            </Link>
            <Link
              href={data[0].field_home_banner_know_more_link}
              className='text-white text-center font-bold text-lg bg-[#6A5ACD] p-4 w-64 rounded'
            >
              {data[0].field_home_banner_link}
            </Link>
          </div>
        </div>
      </div>
      <div className='digital-transformation absolute bottom-0 left-0 w-full bg-[#009CDE] bg-opacity-25 p-8'>
        <h1 className='text-white 2xl:text-6xl md:text-3xl text-1-xl  font-bold text-center opacity'>
          {data[0].field_home_page_subheading}
        </h1>
      </div>
    </div>
  )
}
