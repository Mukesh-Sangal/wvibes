import React from 'react'
import Image from 'next/image'
const LetsStartTopNotch = ({data}) => {
  return (
    <div className='container spacing'>
      <div className='grid md:grid-cols-2 grid-cols-1'>
        <div>
          <h1 className='font-bold text-black text-3xl xl:w-[54%] md:w-[70%]'>
            {data[0].field_title}
          </h1>
        </div>
        <div>
          <Image
            unoptimized
            src={`http://free.lndo.site:8000/${data[0].field_lets_build_image}`}
            width={1920}
            height={100}
          />
        </div>
      </div>
    </div>
  )
}

export default LetsStartTopNotch