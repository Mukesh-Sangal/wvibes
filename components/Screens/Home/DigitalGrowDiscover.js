import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import urlExtractor from 'utils/urlExtractor'
const DigitalGrowDiscover = ({ data, imgDom}) => {
  // console.log(data, 'Digital')
  return (
    <div
      className='bg-cover relative w-full bg-fixed digital-grow'
      style={{ backgroundImage: `url('/digital.png')` }}
    >
      <div className='spacing'>
        <h1
          className='container grow-dis relative lg:text-4xl text-1-xl font-bold text-white text-left lg:mb-12 mb-8'
          dangerouslySetInnerHTML={{
            __html: data[0].field_home_service_title,
          }}
        ></h1>
        <div className='items-container relative flex justify-between flex-wrap '>
          {data.map((item, index) => (
            <div
              className='item services-item rounded py-7 bg-white flex items-center mt-4 h-full xl:min-h-[395px] lg:min-h-[300px] mb-4'
              key={index}
            >
              <div>
                <div
                  className={`${
                    item.field_text_services.trim() == '' ? 'text-suuuuu' : ''
                  }`}
                >
                  <h1
                    className={` xl:text-2xl lg:text-1-xl text-1xl pt-6 font-bold xl:w-64 md:w-48`}
                    dangerouslySetInnerHTML={{
                      __html: item.field_home_service_heading,
                    }}
                  >
                    {/* {item.field_home_service_heading} */}
                  </h1>
                </div>
              </div>
              <div
                className=' xl:text-1-xl lg:self-center lg:text-lg text-xl pt-4 text-left'
                // dangerouslySetInnerHTML={{
                //   __html: item.field_home_services_subheading,
                // }}
              >
                {item.field_home_cta_subheading_link_i && (
                  <div className='flex flex-wrap flex-col'>
                    {item.field_home_cta_subheading_link_i
                      .split(',')
                      .map((link, linkIndex) => {
                        const [text, url] = urlExtractor(link.trim())
                        return (
                          <Link
                            key={linkIndex}
                            href={url}
                            className='xl:text-2xl hover:text-[#25AAE1] text-left lg:text-1xl text-xl font-bold'
                          >
                            {text}
                          </Link>
                        )
                      })}
                  </div>
                )}
              </div>
              {item.field_text_subhead_link_item && (
                <div
                  className=' xl:text-2xl lg:text-1xl lg:self-center text-xl'
                  // dangerouslySetInnerHTML={{
                  //   __html: item.field_text_services,
                  // }}
                >
                  {item.field_text_subhead_link_item
                    .split(',')
                    .map((link, linkIndex) => {
                      const [text, url] = urlExtractor(link.trim())
                      return (
                        <Link
                          key={linkIndex}
                          href={url}
                          className='xl:text-2xl hover:text-[#25AAE1] text-left lg:text-1xl text-xl font-bold'
                        >
                          {text}
                        </Link>
                      )
                    })}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className='text-center w-full pt-12 font-medium text-white relative'>
          <Link href='/contact' className='transparent-buttons-reverse'>
            {data[0].field_home_service_link}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DigitalGrowDiscover
