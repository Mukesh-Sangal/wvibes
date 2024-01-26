import React, { useEffect, useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import CountUp from 'react-countup'

const DrupalProjects = ({ data }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false)
  console.log(data)

  return (
    <div className='bg-[#5856d6] main p-6 '>
      <div className='container spacing flex 2xl:gap-48 lg:gap-36 gap-8 md:flex-nowrap flex-wrap '>
        {data.map((item, index) => (
          <div
            className='item block font-bold 2xl:text-3xl-1 lg:text-3xl text-1-xl text-white'
            key={index}
          >
            {index === data.length - 1 ? (
              <CountUp
                start={viewPortEntered ? null : 0}
                end={+`${item.field_counter_up}`}
                duration={2.75}
                suffix='%'
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
                    <span className='' ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            ) : (
              <CountUp
                start={viewPortEntered ? null : 0}
                end={+`${item.field_counter_up}`}
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
                    <span className='' ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            )}

            <h1 className='font-bold lg:text-2xl text-1-xl text-white'>
              {item.field_portfolio_items}
            </h1>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DrupalProjects
