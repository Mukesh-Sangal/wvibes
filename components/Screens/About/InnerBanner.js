import React from 'react'

const InnerBanner = ({data}) => {
  return (
    <div
      className='innerBanner bg-cover h-[400px] relative'
      style={{ backgroundImage: `url('/aboutBanner.png')` }}
    >
      <div className='container spacing absolute bottom-12'>
        <h1 className='font-bold text-white 2xl:text-4xl lg:text-3xl md:text-2xl text-1-xl'>
          {data[0].field_banner_title}
        </h1>
      </div>
    </div>
  )
}

export default InnerBanner