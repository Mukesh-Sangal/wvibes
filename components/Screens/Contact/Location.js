import Image from 'next/image'
import React from 'react'

const Location = ({data, imgDom}) => {
  return (
    <div className='bg-[#25AAE1] lg:p-16 md:p-12 p-8'>
      <h1 className='lg:text-4xl text-white pb-8 font-bold text-2xl text-left container'>
        {data[0].field_location_title}
      </h1>
      <div className='container grid lg:grid-cols-4 md:grid-cols-2 xl:gap-x-20 gap-8 gap-y-24 '>
        {data.map((item, index) => (
          <div key={index}>
            <div className='relative'>
              <div>
                <Image
                  src={`${imgDom}/${item.field_office_}`}
                  width={300}
                  height={500}
                  className='object-contain w-full'
                />
              </div>
              <div className='location font-bold text-1xl text-white absolute bottom-2 left-2'>
                {item.field_office_location}
              </div>
            </div>
            <div className='address w-[80%] text-left mt-7'>
              <p className='text-white text-left text-lg leading-loose'>
                {item.field_office_address}
              </p>
              <p className='text-white text-left mt-4'>
                <strong>Call Us</strong>
              </p>
              <p className='text-[#e3f307] mt-1'>{item.field_office_phone}</p>
              <p className='text-white text-left mt-4'>
                <strong>Email</strong>
              </p>
              <p className='text-[#e3f307] mt-1'>{item.field_office_email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Location