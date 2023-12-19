import React from 'react'
import Link from 'next/link'
import urlExtractor from 'utils/urlExtractor'
const PowerHouse = ({ data }) => {
  // console.log(data, 'data')
  return (
    <div className='bg-white md:p-16 p-0'>
      <div className='container spacing flex justify-between md:flex-nowrap flex-wrap md:gap-0 gap-4'>
        <div className=''>
          <h1 className='logo font-bold xl:text-4xl lg:text-3xl text-2xl text-black xl:w-2/6 w-[20%]'>
            {data[0].field_power_house_title}
          </h1>
        </div>
        <div className='flex flex-col justify-evenly xl:w-1/2 w-full'>
          {data.map((item, index) => (
            <Link
              className='font-medium 2xl:text-2xl lg:text-1-xl text-1xl text-[#009cde] power'
              href={urlExtractor(item.field_power_house_items_links)[1]}
              key={index}
            >
              {urlExtractor(item.field_power_house_items_links)[0]}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PowerHouse
