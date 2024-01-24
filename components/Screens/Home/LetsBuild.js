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
        className='relative w-full flex items-center justify-center bg-fixed lg:min-h-[60vh] min-h-[80vh] bg-no-repeat bg-cover'
        style={{
          backgroundImage: `url(${imgDom}${data[0].field_lets_build_image})`,
        }}
      >
        {/* <Image
          className='2xl:h-[60vh] lg:h-[65vh] h-[40] w-full object-cover flex items-center justify-center '
          src={`${imgDom}/${data[0].field_lets_build_image}`}
          alt='Kinner kailash'
          width='1920'
          height='1080'
        /> */}
        <div className='image-bg back parachute'>
          {/* <ScrollIcon/> */}
          <div className='container flex justify-center items-center spacing h-full bef-img relative'>
            <div className='flex flex-wrap justify-center lg:gap-x-16 lg:gap-y-0 gap-y-11 items-center'>
              <div className='heading 2xl:w-[41%] lg:w-[50%] w-[100%]'>
                <header className='font-bold lg:text-4xl text-1-xl text-white'>
                  {data[0].field_lets_build_head}
                </header>
              </div>
              <div className='titles grid grid-cols-2 content-between md:gap-y-8 md:gap-x-12 gap-y-8 gap-x-3 lg:w-[40%] w-[100%]'>
                {data.map((item, index) => (
                  <Link
                    className='font-medium lg:text-1-xl text-1xl items-start  text-white'
                    href={urlExtractor(item.field_lets_build_link)[1]}
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
