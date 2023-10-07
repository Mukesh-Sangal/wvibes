import React from 'react'
import Image from 'next/image'
const OurTeam = ({data,imgdom}) => {
  return (
    <div className='container pb-60 bg-white'>
      <div className=''>
        <h1 className='text-black font-bold text-center text-3xl pb-6'>
          {data[0].field_title}
        </h1>
        <p className='text-black text-center lg:text-2xl text-1-xl pb-6'>
          {data[0].field_home_page_subheading}
        </p>
        <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 content-center'>
          {data.map((item) => (
            <div className='text-center'>
              <Image
                className='mx-auto mb-2 object-contain max-w-[100%]'
                src={`${imgdom}${item.field_lets_build_image}`}
                width={200}
                height={200}
              />
              <h2 className='text-black font-bold lg:text-1xl text-lg mb-2'>
                {item.field_name}
              </h2>
              <h3 className='text-black lg:text-lg text-base'>{item.field_position}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurTeam