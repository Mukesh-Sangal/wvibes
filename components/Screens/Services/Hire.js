import React from 'react'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'

const Hire = (props) => {
  return (
    <div className='bg-sky-600 lg:py-24 py-12 '>
      <div className='container justify-between flex lg:flex-nowrap flex-wrap xl:gap-0 gap-6'>
        <div className='flex lg:w-[48%] justify-between flex-wrap items-baseline lg:flex-col'>
          <div className='md:w-auto 2xl:w-[80%] w-full'>
            <h1 className='font-bold text-white xl:text-4xl md:text-2xl text-1-xl'>
              {props.title}
            </h1>
          </div>
          <div className='lg:mt-0 mt-8'>
            <Link className='hire-a-dedicated-button' href='/contact'>
              {props.link}
            </Link>
          </div>
        </div>
        <div className='grid grid-cols-2 lg:w-[48%] w-full content-between lg:gap-y-8 2xl:gap-x-14 md:gap-y-8 gap-y-4 gap-x-8 lg:pt-0 pt-8'>
          {props?.list.map((el, index) => (
            <div
              className='xl:text-[38px] lg:text-1xl text-white items-start'
              key={index}
            >
              {el[props.value]}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hire
