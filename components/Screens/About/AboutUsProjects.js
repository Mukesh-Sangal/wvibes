import Image from 'next/image'
import React from 'react'

const AboutUsProjects = ({data}) => {
  console.log(data,"About Counter")
  return (
    <div
      className='bg-cover lg:h-[400px] h-[500px] relative'
      style={{ backgroundImage: 'url(/aboutProject.png)' }}
    >
      <div className='about about-opacity'>
        <div className='container spacing grid lg:grid-cols-4 grid-cols-2 h-full xl:gap-30 md:gap-16 gap-8 content-center '>
          {data.map((item, index) => (
            <div className="flex flex-col font-bold">
              <h1 className='lg:text-4xl text-2xl text-white'>{item.field_counter_up}</h1>
              <div
                className='font-bold text-white lg:text-2xl text-1-xl'
                key={index}
              >
                {item.field_portfolio_items}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUsProjects