import React, { useEffect, useState } from 'react'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const address = [
    {
      title: 'DHARAMSHALA OFFICE',
      iframe:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.24493493255!2d76.32325197643145!3d32.197630073911206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905db27f502831b%3A0xc3c166f4c4b7e252!2sHimachal%20Pradesh%20Cricket%20Association%20Stadium%2C%20Dharamshala!5e0!3m2!1sen!2sin!4v1706247003941!5m2!1sen!2sin',
      address: 'Near HPCA Stadium Dharmshala here',
      phone: '+91 12345678',
      email: 'info@growvibes.co.in',
    },

    {
      title: 'AUSTRALIA OFFICE',
      iframe:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7306.690978258501!2d133.87498009607492!3d-23.699353364820592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b321944be8f1331%3A0x50217a82a254fd0!2sAlice%20Springs%20NT%200870%2C%20Australia!5e0!3m2!1sen!2sin!4v1706247070335!5m2!1sen!2sin',
      address: 'Australia office adress here',
      phone: '+91 12345678',
      email: 'info@growvibes.com',
    },
  ]
    useEffect(() => {
      Aos.init({
        duration: 600,
        disable: 'mobile',
      })
    })
  return (
    <section className='relative'>
        <iframe
          width='100%'
          height='530'
          src={address[activeIndex].iframe}
          style={{ border: 0 }}
        ></iframe>
      <div className='container'>
        <div className='lg:absolute xl:right-0 lg:-right-9 lg:bottom-0 lg:top-[4%] xl:max-w-lg lg:max-w-md  w-full xl:translate-x-[-20%] lg:translate-x-[-10%] lg:block flex m-auto justify-center flex-wrap mb-5 '>
          {address.map((item, index) => {
            return (
              <article
                key={index}
                className={`${
                  activeIndex === index
                    ? 'active bg-dark1 mb-3 px-10 pt-0 pb-8 w-full cursor-pointer'
                    : 'bg-white lg:mb-3 hover:bg-dark1 mb-3 w-full cursor-pointer'
                }`}
                data-aos='zoom-in'
              >
                <header
                  onClick={() => setActiveIndex(index)}
                  className={`${
                    activeIndex === index
                      ? 'active text-white hover:text-white heading-bar-left m-0 pt-0 accordion-header'
                      : 'heading-bar-left hover:text-white m-0  px-10 py-4 pt-0'
                  }`}
                >
                  <h2>{item.title}</h2>
                </header>
                {activeIndex === index && (
                  <div className='content'>
                    <div className='flex flex-col text-white text-lg mb-2'>
                      {item?.address}
                    </div>
                    <div className='text-white text-lg mb-2  flex items-center hover:text-[#dc248b]'>
                      <FaEnvelope
                        color={'white hover:#dc248b'}
                        size={20}
                        className='mr-3 transition duration-500 ease-in-out'
                      />
                      {item?.email && (
                        <a href={`mailto:${item?.email}`}>{item?.email}</a>
                      )}
                    </div>
                    <div className='text-white text-lg mb-2 flex items-center hover:text-[#dc248b]'>
                      <FaPhoneAlt
                        color={'white hover:#dc248b'}
                        size={20}
                        className='mr-3 pt-1 transition duration-500 ease-in-out'
                      />
                      {item?.phone && (
                        <a href={`tel:${item?.phone}`}>{item?.phone}</a>
                      )}
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Accordion
