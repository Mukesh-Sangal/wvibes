import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import urlExtractor from 'utils/urlExtractor'
import ScrollIcon from '../../ScrollIcon/ScrollIcon'
const LetsBuild = ({ data, imgDom }) => {
  // console.log(data,'Lets')
  return (
    <>
      <div
        className='relative w-full flex items-center justify-center bg-fixed lg:min-h-[60vh] md:min-h-[40vh] min-h-[75vh] bg-no-repeat bg-cover'
        style={{
          backgroundImage: `url(${imgDom}${data[0].field_lets_build_image})`,
        }}
      >
        <div className='image-bg back parachute'>
          {/* <ScrollIcon/> */}
          <div className='container flex justify-center items-center spacing h-full bef-img relative'>
            <div className='flex flex-wrap justify-between lg:gap-x-16 lg:gap-y-0 gap-y-11 items-center lg:w-full md:w-[90%]'>
              <div className='heading 2xl:w-[41%] lg:w-[50%] w-[100%]'>
                <header className='font-bold xl:text-4xl lg:text-3xl text-1-xl text-white'>
                  {data[0].field_lets_build_head}
                </header>
              </div>
              <div className='titles grid grid-cols-2 content-between md:gap-y-8 md:gap-x-12 gap-y-8 gap-x-3 lg:w-[40%] w-[100%]'>
                {data.map((item, index) => (
                  <Link
                    className='font-medium xl:text-1-xl text-1xl items-start  text-white'
                    href={`/technologies/${urlExtractor(item.field_lets_build_link)[1]}`}
                    key={index}
                  >
                    {urlExtractor(item.field_lets_build_link)[0]}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LetsBuild
