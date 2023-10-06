import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const TechGrow = ({ data, imgDom }) => {
  return (
    <div className='relative w-full flex items-center justify-center'>
      <Image
        className='2xl:h-[60vh] lg:h-[70vh] h-[85vh] w-full object-cover flex items-center justify-center'
        unoptimized
        src={`${imgDom}/${data[0].field_lets_build_image}`}
        width={1920}
        height={500}
      />
      <div className='image-bg back'>
        <div className='container spacing text-white'>
          <h1 className='xl:text-4xl lg:text-4xl text-3xl text-left font-bold mb-8 text-white'>
            {data[0].field_lets_build_head}
          </h1>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 xl:gap-28 gap-x-14 gap-y-10'>
            {data.map((item) => (
              <div className='lg:text-1-xl text-1-xl font-bold text-white'>
                {item.field_subhead}
              </div>
            ))}
          </div>
          <div className='text-right'>
            <Link
              className='text-white lg:text-2xl text-lg font-bold'
              href='lets-connect'
            >
              LETSCONNECT
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechGrow