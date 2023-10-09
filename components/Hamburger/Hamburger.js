'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function HamburgerMenu() {
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
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='lg:hidden flex justify-between items-center relative bg-white transition-all duration-500 ease-in-out p-2 shadow-md hover:shadow-lg'>
      <div className='w-full'>
        <Link href='/'>
          <Image src='/logo.png' width={150} height={150} />
        </Link>
      </div>
      <div>
        <button
          onClick={toggleMenu}
          className='block lg:hidden self-end text-right text-black p-2 focus:outline-none'
        >
          <svg
            className='h-6 w-6 fill-current'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            {isOpen ? (
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M19 5H5v2h14V5zm0 6H5v2h14v-2zm0 6H5v2h14v-2z'
              />
            ) : (
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z'
              />
            )}
          </svg>
        </button>
      </div>
      {isOpen && (
        <div
          className={`lg:hidden bg-gray-800 w-full transition-all duration-500 transform z-10 ${
            isOpen
              ? 'translate-x-0 transition-transform'
              : 'translate-x-full transition-transform'
          } fixed top-14 right-0 w-64`}
          style={{
            transitionDuration: '0.3s', // Adjust the duration as needed
            transitionTimingFunction: 'cubic-bezier(0,1.5,0.5,1)', // Use a custom timing function for a smoother effect
          }}
        >
          {/* Insert your navigation links here */}
          <ul className='py-4'>
            {menu.map((item, index) => (
              <li key={index}>
                {item.url && (
                  <Link
                    href={item && item?.url}
                    className='block text-white px-4 py-2'
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default HamburgerMenu
