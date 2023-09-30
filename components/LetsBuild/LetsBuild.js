import React from 'react'
import Image from 'next/image'
const LetsBuild = ({ data }) => {
  console.log(data, 'Data')
  return (
    <div
      className='bg-cover  bg-[#009CDE] bg-opacity-70'
      style={{ backgroundImage: `url('/letsbuild.png')` }}
    >
      <div className='container spacing grid grid-cols-5 items-center'>
        <div className='font-bold xl:text-4xl lg:text-lg text-sm text-white col-start-1 col-end-3 '>
          Lets Build Great Digital Experiences Together
        </div>
        <div className='font-medium xl:text-2xl lg:text-lg text-sm text-white col-start-3 col-end-5'>
          <div>Strategy</div>
          <div>Development</div>
          <div>Digital Marketing</div>
        </div>
        <div className='font-medium xl:text-2xl lg:text-lg text-sm text-white col-start-5 col-end-7'>
          <div>Design</div>
          <div>Support</div>
          <div>Growth</div>
        </div>
      </div>
    </div>
  )
}

export default LetsBuild
