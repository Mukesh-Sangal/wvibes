import React from 'react'

const OurMission = ({data}) => {
  return (
    <div className='container spacing text-left'>
      <div className='md:w-8/12 w-full m-auto'>
        <h1 className='font-bold text-black lg:text-4xl text-2xl pb-8'>{data[0].field_title}</h1>
        <p className='font-medium text-black lg:text-2xl text-1-xl pb-8'>{data[0].field_desc}</p>
        <hr/>
      </div>
    </div>
  )
}

export default OurMission