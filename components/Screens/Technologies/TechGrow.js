import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const TechGrow = ({ data, imgDom }) => {
  console.log(data, 'Grow Tech')
  return (
    <div className='relative w-full flex items-center justify-center'>
      <Image
        className='2xl:h-[60vh] lg:h-[70vh] h-[100vh] w-full object-cover flex items-center justify-center'
        src={`${imgDom}/${data[0].field_lets_build_image}`}
        width={1920}
        height={500}
        alt={data[0].field_lets_build_head}
      />
      <div className='image-bg back'>
        <div className='container spacing text-white'>
          <h1 className='xl:text-4xl lg:text-4xl md:text-3xl text-2xl text-left font-bold mb-8 text-white'>
            {data[0].field_lets_build_head}
          </h1>
          <div className='grid lg:grid-cols-3 grid-cols-2 xl:gap-x-28 gap-x-14 lg:gap-y-14 gap-y-10 '>
            {data.map((item, index) => (
              <div
                className='md:text-1-xl text-1xl font-bold text-white'
                key={index}
              >
                {item.field_subhead}
              </div>
            ))}
          </div>
          <div className='text-right mt-8'>
            <Link
              className='text-white rounded border-2 font-medium lg:text-1-xl text-1xl p-4'
              href='/contact'
            >
              Lets connect
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechGrow