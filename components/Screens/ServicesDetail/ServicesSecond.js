import React from 'react'
import Image from 'next/image'

const ServicesSecond = ({ data, imgDom }) => {
  // console.log(data, 'Second Item')
  return (
    <div
      className={`grid ${
        data[0].field_grid_columns !== ''
          ? 'lg:grid-cols-3 grid-cols-1'
          : 'lg:grid-cols-4 grid-cols-1'
      }  container m-auto py-16`}
    >
      {data.map((item, index) => (
        <div className='px-16 flex flex-col' key={index}>
          <div className={`${item.field_grid_columns !== '' ? 'order-2' : ''}`}>
            <h1
              className={`${
                item.field_grid_columns !== ''
                  ? 'text-lg lg:text-xl mt-4'
                  : 'text-1xl lg:text-3xl'
              } font-bold text-blue`}
            >
              {item.field_counter}
            </h1>
            <p
              className={` ${
                item.field_grid_columns !== ''
                  ? 'text-base lg:text-lg mt-2'
                  : 'text-lg lg:text-xl'
              }  text-blue h-20`}
            >
              {item.field_desc}
            </p>
          </div>
          <div>
            <Image
              src={`${imgDom}${item.field_banner_icon}`}
              width={100}
              height={100}
              alt="Counter Items"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ServicesSecond
