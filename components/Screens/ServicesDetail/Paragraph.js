import React from 'react'

const Paragraph = ({data}) => {
//  console.log(data, 'Paragraph')
  return (
    <div className='container lg:my-24 my-8'>
      <hr />
      <div className='lg:my-12 my-3'>
        <h1 className='text-blue lg:text-3xl md:text-1-xl text-1xl font-bold'>
          {data[0].field_title}
        </h1>
        <h2 className='text-blue lg:text-1-xl text-xl font-bold'>
          {data[0].field_home_page_subheading}
        </h2>
        <p className='text-[#52697a] lg:text-1xl text-base my-4'>
          {data[0].field_desc}
        </p>
      </div>
      <hr />
    </div>
  )
}

export default Paragraph