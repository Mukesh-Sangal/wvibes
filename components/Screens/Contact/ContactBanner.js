import React from 'react'

const ContactBanner = ({ title }) => {
  return (
    <div
      className='innerBanner bg-cover h-[400px]'
      style={{ backgroundImage: `url('/aboutBanner.png')` }}
    >
      <div className='container spacing flex items-center h-full'>
        <h1 className='font-bold text-white 2xl:text-4xl lg:text-3xl md:text-2xl text-1-xl'>
          { title }
        </h1>
      </div>
    </div>
  )
}

export default ContactBanner
