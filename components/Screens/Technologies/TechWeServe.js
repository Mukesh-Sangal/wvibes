import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const TechWeServe = ({data, imgDom}) => {
  return (
    <div className='container spacing'>
      <h1 className='xl:text-6xl lg:text-4xl text-3xl font-bold mb-10'>
        {data[0].field_title}
      </h1>
      <div class='grid lg:grid-rows-4 grid-cols-1 lg:w-auto w-full lg:grid-flow-col lg:gap-24 gap-6 mb-8'>
        {data.map((item) => (
          <div
            key={item.field_tech_heading}
            className='flex lg:gap-24 gap-8 items-center'
          >
            <h1 className='lg:text-3xl text-1xl md:w-56 w-40'>
              {item.field_tech_heading}
            </h1>
            <div className='flex items-center content-center lg:gap-32 gap-12'>
              {item.field_tech_image_unlimited
                .split(',')
                .map((image, index) => (
                  <div>
                    <Image
                      key={index}
                      unoptimized
                      src={`${imgDom}/${image.trim()}`} // Remove leading/trailing spaces
                      width={100}
                      height={100}
                      alt={`Image ${index + 1}`} // Provide an alt text for accessibility
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className='text-center'>
        <Link
          href='/'
          className='text-[#dc248b] lg:text-2xl text-lg border-3 border-[#dc248b] p-4 font-bold'
        >
          {data[0].field_section_link}
        </Link>
      </div>
    </div>
  )
}

export default TechWeServe
