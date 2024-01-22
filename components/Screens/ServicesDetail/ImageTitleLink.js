import React from 'react'
import Link from 'next/link'
import urlExtractor from 'utils/urlExtractor'
import Image from 'next/image'

const ImageTitleLink = ({ data, imgDom }) => {
  // console.log(data)
  return (
    <div className='bg-blue py-10'>
      <div className='container lg:flex lg:flex-wrap justify-between py-12'>
        <div className='lg:basis-[40%]'>
          <div className='p-4'>
            <p className='title text-orange-600 lg:text-xl text-lg font-bold mb-4'>
              {data[0].field_leading_the_pack}
            </p>
            <h1 className='text-white xl:text-3xl lg:text-1-xl text-1xl mb-8 font-bold '>
              {data[0].field_title}
            </h1>
            {data.map((item, index) => (
              <Link
                href={urlExtractor(item.field_cta_link)[1]}
                className='bg-white lg:text-lg text-base p-4 text-blue rounded font-bold'
                key={index}
              >
                {/* {data[0].field_cta_link} */}
                {urlExtractor(item.field_cta_link)[0]}
              </Link>
            ))}
          </div>
        </div>
        <div className='lg:basis-[50%]'>
          <div className='p-4'>
            <Image
              src={`${imgDom}/${data[0].field_services_asset_management_}`}
              width={1920}
              height={600}
              alt="Services Image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageTitleLink
