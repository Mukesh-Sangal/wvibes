import Image from 'next/image'
import React from 'react'

const AboutUsProjects = ({data}) => {
  return (
    <div
      className='bg-cover lg:h-[300px] h-[500px] relative'
      style={{ backgroundImage: 'url(/aboutProject.png)' }}
    >
      <div className='about about-opacity'>
        <div className='container spacing grid lg:grid-cols-4 grid-cols-2 h-full xl:gap-40 gap-16 content-center '>
          {data.map((item, index) => (
            <div className='font-bold text-white md:text-3xl text-2xl' key={index}>
              {item.field_portfolio_items}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUsProjects