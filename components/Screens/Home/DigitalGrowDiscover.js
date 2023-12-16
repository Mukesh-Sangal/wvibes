import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const DigitalGrowDiscover = ({ data, imgDom}) => {
  // console.log(data, 'Digital')
  return (
    <div
      className='bg-cover relative w-full bg-fixed digital-grow'
      style={{ backgroundImage: `url('/digital.png')` }}
    >
      <div className='spacing'>
        <h1
          className='container grow-dis relative xl:text-5xl lg:text-3xl text-1-xl font-bold text-white text-left lg:mb-12 mb-8'
          dangerouslySetInnerHTML={{
            __html: data[0].field_home_service_title,
          }}
        ></h1>
        <div className='items-container relative flex justify-between flex-wrap '>
          {data.map((item, index) => (
            <div
              className='item services-item rounded py-7 px-3 bg-white flex items-center h-full lg:min-h-[395px] min-h-[300px] mb-4'
              key={index}
            >
              <div>
                <div>
                  <Image
                    src={`${imgDom}${item.field_service_logo}`}
                    width={100}
                    height={100}
                    alt='Image Discover'
                    className='md:w-full'
                  />
                </div>
                <div
                  className={`${
                    item.field_text_services.trim() == '' ? 'text-suuuuu' : ''
                  }`}
                >
                  <h1
                    className={` lg:text-1-xl text-lg pt-6 font-bold`}
                    dangerouslySetInnerHTML={{
                      __html: item.field_home_service_heading,
                    }}
                  >
                    {/* {item.field_home_service_heading} */}
                  </h1>
                </div>
              </div>
              <div
                className='font-bold xl:text-2xl lg:text-1xl text-xl pt-4'
                dangerouslySetInnerHTML={{
                  __html: item.field_home_services_subheading,
                }}
              >
                {/* {item.field_home_services_subheading} */}
              </div>
              {item.field_text_services && (
                <div
                  className='font-bold xl:text-2xl lg:text-1xl text-xl pt-4'
                  dangerouslySetInnerHTML={{
                    __html: item.field_text_services,
                  }}
                >
                  {/* {item.field_text_services} */}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='text-center w-full pt-12 font-bold text-white relative'>
          <Link
            href='/contact'
            className='px-6 py-3 border-2 rounded inline-block xl:text-2xl lg:text-1-xl text-xl'
          >
            {data[0].field_home_service_link}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DigitalGrowDiscover
