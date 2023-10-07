import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import menu from '../../data/menu'
const Header = () => {
 const menu = [
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
     title: 'Contact Us',
     url: '/contact',
   },
 ]
  return (
    <>
      <div className='lg:flex justify-between items-center px-8 py-4 hidden'>
        <div className='logo-container'>
          <Link href={'/'}>
            <Image unoptimized src='/logo.png' width={200} height={200} />
          </Link>
        </div>
        <div className=''>
          <ul className='flex gap-6'>
            {menu.map((item, index) => (
              <li
                key={index}
                className='font-bold hover:text-red last:border-2 last:border-[#5a4da8] py-1 px-2 text-center last:rounded'
              >
                {item.url && <Link href={item && item?.url}>{item.title}</Link>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
