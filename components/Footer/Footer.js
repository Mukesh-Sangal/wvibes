import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
 const data = [
   {
     title: 'Home',
     url: '/',
   },
   {
     title: 'Our Services',
     url: '/services',
   },
   {
     title: 'About us',
     url: '/about',
   },
   {
     title: 'Technologies',
     url: '/technologies',
   },
   {
     title: 'Facebook',
     url: '/facebook',
   },
   {
     title: 'Instagram',
     url: '/insta',
   },
   {
     title: 'Twitter',
     url: '/twitter',
   },
   {
     title: 'Linkedin',
     url: '/linkedin',
   },
   {
     title: 'Privacy Policy',
     url: '/privacy-policy',
   },
   {
     title: 'Terms Of service',
     url: '/terms-and-conditions',
   },
   {
     title: 'Contact Us',
     url: '/contact',
   },
 ]
  return (
    <div className='container spacing flex flex-wrap md:gap-12 gap-8 bg-white'>
        <div className='lg:basis-[25%] basis-[100%]'>
          <Image width={300} height={300} src='/logo.png' alt='footer-logo'/>
        </div>
        <div className='footer-links lg:basis-[70%] basis-[100%] text-left lg:mt-8 mt-4'>
          <div>
            <ul className='grid lg:grid-rows-4 grid-rows-6 grid-flow-col gap-4 lg:mb-20 mb-10'>
              {data.map((item, index) => (
                <li
                  key={index}
                  className='font-medium md:text-1xl text-lg hover:text-red py-1 px-2 text-left'
                >
                  {item.url && (
                    <Link href={item && item?.url}>{item.title}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <p className='md:text-1xl text-lg'>
            2024© growibes All rights reserved.
          </p>
        </div>
    </div>
  )
}

export default Footer