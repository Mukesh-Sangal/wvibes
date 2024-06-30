import React from 'react'

const InnerBanner = ({data, imgDom}) => {
  return (
    <div
      className='innerBanner bg-cover h-[600px] bg-no-repeat bg-right-bottom'
      style={{
        backgroundImage: `url(${imgDom}/${data[0].field_banner_image})`
      }}
    >
      <div className='container spacing flex items-center h-full'>
        <h1 className='font-bold text-white lg:text-4xl md:text-2xl text-1-xl'>
          {data[0].field_banner_title}
        </h1>
      </div>
    </div>
  )
}

export default InnerBanner