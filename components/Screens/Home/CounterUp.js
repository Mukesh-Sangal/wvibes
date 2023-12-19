import React, { useState, useEffect } from 'react'
import CountUp from 'react-countup'
import Image from 'next/image'
import VisibilitySensor from 'react-visibility-sensor'
// import Aos from 'aos'
// import 'aos/dist/aos.css'
const CounterUp = ({ data, imgDom }) => {
  // console.log(data);
  console.log(data, 'Improving')
  const [viewPortEntered, setViewPortEntered] = useState(false)
  // useEffect(() => {
  //   Aos.init({ duration: 600, disable: 'mobile', once: true })
  // }, [])
  return (
    <>
      <section
        className='improving bg-cover bg-center bg-black h-auto text-white object-fill bg-fixed'
        style={{ backgroundImage: `url(${imgDom}${data[0].field_improve_b})` }}
      >
        <article className='container spacing relative z-30'>
          <header className='heading text-white text-center text-1-xl font-bold'>
            {data[0].field_improve_header}
          </header>
          <ul className='grid lg:grid-cols-3 lg:gap-4 grid-cols-1 text-center lg:mt-20 mt-12'>
            {data.map((detail, index) => (
              <li
                key={index}
                className='mb-12 lg:mb-0 flex flex-col justify-center items-center gap-5 p-7 '
              >
                {/* <Image
                  src={`${imgDom}/${detail.field_improve_icon}`}
                  width={100}
                  height={100}
                /> */}
                <CountUp
                  start={viewPortEntered ? null : 0}
                  end={+`${detail.field_counter}`}
                  duration={2.75}
                  suffix='+'
                  delay={0}
                >
                  {({ countUpRef, start }) => (
                    <VisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true)
                        }
                      }}
                      delayedCall
                    >
                      <span
                        className='text-3xl font-normal border-white rounded-full w-44 h-44 inline-flex items-center justify-center z-50 conic-gradient relative' 
                        ref={countUpRef}
                      />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <h3 className='capitalize text-1xl text-white font-bold z-50'>
                  {detail.field_short_desc}
                </h3>

                {/* <p className='mt-6 text-base'>{detail.field_short_desc}</p> */}
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>
  )
}

export default CounterUp
