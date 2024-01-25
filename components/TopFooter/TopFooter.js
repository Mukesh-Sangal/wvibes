import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const TopFooter = (props) => {
  return (
    <div className='container'>
      <div className='banner flex flex-wrap justify-between align-center pt-20'>
        <div className='relative lg:mb-0 mb-12'>
          <div className='font-bold flex flex-wrap justify-between'>
            <h1 className='footer-title lg:text-4xl text-1-xl lg:basis-[60%] md:mb-0 mb-8 '>
              {props.title}
            </h1>
          </div>
          <Link
            className='footer-link py-3 px-3 md:absolute lg:top-8 top:4 right-0 font-medium lg:text-1-xl text-1xl  border-2 rounded border-[#000] inline-block mt-2'
            href='/contact'
          >
            {props.link}
          </Link>
        </div>

        <div className='basis-[100%] flex flex-col justify-center'>
          <Image
            src={props.imgurl}
            alt={props.title}
            width={1590}
            height={250}
            priority
            loading='eager'
            className='max-w-[100%] w-[100%] h-[250px] ml-auto object-cover object-top'
          />
        </div>
      </div>
    </div>
  )
}

export default TopFooter
