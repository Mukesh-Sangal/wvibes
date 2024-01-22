import React from 'react'
import Image from 'next/image';

const ServicesBanner = ({ data, imgDom }) => {
//  console.log(data, 'Services Banner Data');

  return (
    <div
      className='service-bef relative'
      // style={{ backgroundImage: `url('/services.png')` }}
    >
      <div className='container flex flex-wrap justify-between relative'>
        <div className='xl:basis-[33%] lg:basis-[45%] w-full lg:order-1 order-2'>
          <Image
            src={`${imgDom}${data[0].field_banner_icon}`}
            alt={data[0].title}
            width={100}
            height={100}
            className='mb-4 mt-8 '
          ></Image>
          <div className='desc'>
            <h1 className='lg:text-3xl text-1-xl text-white font-bold mb-8 '>
              {data[0].field_banner_title}
            </h1>
            <h3 className='lg:text-1-xl text-1xl text-white font-bold'>
              {data[0].field_heading}
            </h3>
            <p className='lg:text-1xl  text-xl text-white mb-12'>
              {data[0].field_home_page_subheading}
            </p>
          </div>
        </div>
        <div className='lg:basis-[49%] w-full  overflow-hidden lg:order-2 order-1'>
          <div className='h-full'>
            <Image
              src={`${imgDom}${data[0].field_banner_image}`}
              width={1000}
              height={1000}
              alt='Banner Image'
              className='w-full h-full object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesBanner