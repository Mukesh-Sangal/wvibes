import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import urlExtractor from 'utils/urlExtractor'

const BrandManagement = ({ data, imgDom }) => {
  // console.log(data, 'Brand management')
  return (
    <div className='container'>
      <div className='lg:flex lg:flex-wrap justify-between lg:py-8 py-4'>
        <div className={`${data[0].field_image_position !== '' ? 'order-2 ' : ''} basis-[48%]`}>
          <div className='w-11/12'>
            <Image
              src={`${imgDom}${data[0].field_banner_image}`}
              width={1920}
              height={500}
              alt="brand"
            />
          </div>
        </div>
        <div className='basis-[44%] lg:mt-0 mt-10'>
          <div>
            <h1 className='lg:text-xl text-base text-[#52697a] font-bold'>
              {data[0].field_banner_title_1}
            </h1>
            <h2 className='lg:text-3xl text-1xl text-blue font-bold'>
              {data[0].field_home_page_subheading}
            </h2>
            <p className='lg:text-1xl text-xl text-[#52697a] mt-4 lg:mb-20 mb-8'>
              {data[0].field_desc_2}
            </p>
            <div className='lg:mb-16 mb-8'>
              {data.map((item, index) => (
                <div key={index} className='flex flex-wrap gap-4'>
                  {item.field_cta_link.split(',').map((link, linkIndex) => {
                    const [text, url] = urlExtractor(link.trim())
                    return (
                      <Link
                        key={linkIndex}
                        href={url}
                        className='bg-blue lg:text-lg text-base p-4 text-white rounded font-bold'
                      >
                        {text}
                      </Link>
                    )
                  })}
                </div>
              ))}
            </div>

            <hr />
            {data[0].field_related_resources_title && (
              <div className='lg:mt-12'>
                <p className='lg:text-xl text-base text-blue mt-4 lg:mb-3 mb-2 font-bold'>
                  {data[0].field_related_resources_title}
                </p>
                {data[0].field_related_resources_link && (
                  <div className='related-links'>
                    {data.map((item, index) => (
                      <div key={index}>
                        {item.field_related_resources_link
                          .split(',')
                          .map((link, linkIndex) => {
                            const [text, url] = urlExtractor(link.trim())
                            return (
                              <div className='mb-4' key={linkIndex}>
                                <Link
                                  href={url}
                                  className='lg:text-lg text-base text-[#26a4dd]  rounded underline'
                                >
                                  {text}
                                </Link>
                              </div>
                            )
                          })}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandManagement
