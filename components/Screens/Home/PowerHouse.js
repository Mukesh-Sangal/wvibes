import React from 'react'
const PowerHouse = ({ data }) => {
  // console.log(data, 'data')
  return (
    <div className='bg-white'>
      <div className='container spacing flex justify-between md:flex-nowrap flex-wrap md:gap-0 gap-4'>
        <div className=''>
          <h1 className='logo font-bold xl:text-4xl lg:text-3xl text-2xl text-black xl:w-2/6 w-[20%]'>
            {data[0].field_power_house_title}
          </h1>
        </div>
        <div className='flex flex-col justify-evenly xl:w-1/2 w-full'>
          {data.map((item, index) => (
            <h2
              className='font-medium 2xl:text-2xl lg:text-1-xl text-1xl text-[#009cde] power'
              key={index}
            >
              {item.field_power_house_items}
            </h2>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PowerHouse
