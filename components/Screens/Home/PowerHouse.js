import React from 'react'
import Link from 'next/link'
import urlExtractor from 'utils/urlExtractor'

const PowerHouse = ({ data }) => {
  return (
    <section className='bg-white md:px-12 py-12 px-4'>
      <div className='container p-0 flex flex-wrap md:flex-nowrap gap-y-8'>
        <header className=''>
          <h1 className='logo font-bold xl:text-4xl lg:text-3xl text-2xl text-black xl:w-2/6 w-[20%]'>
            {data[0]?.field_power_house_title}
          </h1>
        </header>
        <nav className='flex flex-col lg:justify-evenly md:w-1/2 w-full'>
          {data.map((item, index) => {
            const [linkText, linkUrl] =
              urlExtractor(item.field_power_house_items_links) || []
            return linkUrl ? (
              <Link
                className='font-medium 2xl:text-2xl lg:text-1-xl text-xl text-[#009cde] power hover:text-[#DC248B]'
                href={`/technologies/${linkUrl}`}
                key={index}
              >
                {linkText}
              </Link>
            ) : null
          })}
        </nav>
      </div>
    </section>
  )
}

export default PowerHouse
