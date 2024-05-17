'use client'
import React from 'react'

const Banner = ({ data }) => {
  return (
    <div
      className='innerBanner bg-cover h-[400px]'
      style={{ backgroundImage: `url(${data.field_case_study_banner_image[0].url})` }}
    >
      <div className='container spacing flex items-center h-full'>
        <h1 className='font-bold text-white lg:text-4xl md:text-2xl text-1-xl'>
          {data.field_case_study_banner_title[0].value}
        </h1>
      </div>
    </div>
  )
}
export default Banner
