import Link from 'next/link'
import React from 'react'

const TechDesign = ({ data }) => {
  return (
    <div
      className={data[0].field_section_5 !== '' ? 'bg-[#6a5acd]' : 'bg-white'}
    >
      <div className='container spacing'>
        <h1
          className={`xl:text-4xl lg:text-4xl md:text-3xl text-1-xl text-left font-bold mb-8 ${
            data[0].field_section_5 !== '' ? 'text-white' : 'text-black'
          }`}
          dangerouslySetInnerHTML={{
            __html: data[0].field_cta_section_heading,
          }}
        ></h1>
        <div className='grid lg:grid-cols-3 grid-cols-2 xl:gap-28 lg:gap-x-14 lg:gap-y-10 gap-6'>
          {data.map((item, index) => (
            <div
              className={`lg:text-1-xl text-1xl font-bold ${
                data[0].field_section_5 !== '' ? 'text-white' : 'text-black'
              }`}
              dangerouslySetInnerHTML={{
                __html: item.field_cta_subheading,
              }}
              key={index}
            >
            </div>
          ))}
        </div>
        <div className='text-right mt-8'>
          <Link
            className={`${
              data[0].field_section_5 !== '' ? 'text-white' : 'text-black'
            } lg:text-2xl text-1xl font-bold`}
            href='/contact'
          >
            LETSCONNECT
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TechDesign
