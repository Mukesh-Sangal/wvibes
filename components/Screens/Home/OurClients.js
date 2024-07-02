import Image from 'next/image';
import React from 'react'

const OurClients = ({data, imgDom}) => {
 console.log(data,'Client');
 const imagePaths = data[0]?.field_clients_logos.split(', ')
  return (
    <div className='bg-[#009CDE] bg-opacity-50 text-center spacing'>
      <div className='container'>
        <h1 className='font-bold lg:text-4xl text-1-xl text-white pb-8'>
          {data[0]?.field_clients_text}
        </h1>
        <div className='grid grid-cols-4 gap-4'>
          {imagePaths?.map((path, index) => (
            <Image
              key={index}
              src={`${imgDom}${path}`}
              alt={`Client Image ${index + 1}`}
              width={100} // Adjust width as needed
              height={100} // Adjust height as needed
              className='object-contain'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurClients