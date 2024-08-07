import Image from 'next/image';
import React from 'react'

const OurClients = ({data, imgDom}) => {
 const imagePaths = data[0]?.field_clients_logos.split(', ')
  return (
    <div className='bg-[#009CDE] bg-opacity-50 text-center lg:py-8 py-4'>
      <div className='container'>
        <div className='lg:grid lg:grid-cols-4 gap-8 items-center flex justify-center flex-wrap'>
          {imagePaths?.map((path, index) => (
            <Image
              key={index}
              src={`${imgDom}/${path}`}
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