import React from 'react'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'

const Hire = (props) => {
  return (
    <div className='bg-sky-600 py-8'>
      <div className='container'>
        <div className='flex flex-wrap justify-between items-start'>
          <div className='xl:basis-[25%] basis-[100%]'>
            <h2 className='font-bold lg:text-4xl text-1-xl leading-[1.2] text-white'>
              {props.title}
            </h2>
            <p>
              <Link href='/contact'>
                <Button
                  variant='outline'
                  className='bg-[transparent] text-white my-10'
                >
                  {props.link}
                </Button>
              </Link>
            </p>
          </div>
          <div className='xl:basis-[70%] basis-[100%]  flex flex-wrap justify-between items-center'>
            {props?.list.map((el, index) => (
              <div
                className='lg:text-1-xl text-1xl font-[500] my-5 basis-[45%] w-[250px] text-white'
                key={index}
              >
                {el[props.value]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hire
