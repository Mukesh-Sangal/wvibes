
import React, {useEffect} from 'react'

const DrupalProjects = ({data}) => {
  
  return (
    <div className='bg-[#5856d6] main p-6 '>
      <div className='container spacing flex 2xl:gap-56 lg:gap-3 gap-4 md:flex-nowrap flex-wrap '>
        {data.map((item, index) => (
          <div className='item' key={index}>
            <h1 className='font-bold 2xl:text-3xl-1 lg:text-3xl text-1-xl  text-white '>
              {item.field_portfolio_items}
            </h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DrupalProjects