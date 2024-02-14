import React from 'react'

const Process = (props) => {
  return (
    <div>
      {props.desc !== '' ? (
        <div className='lg:pb-20 pb-8'>
        <div className='container'>
          <h2 className='mb-8 font-semibold lg:text-4xl text-1-xl'>
            {props.title}
          </h2>
          <p className='lg:text-[38px] text-1xl mb-10'>{props.desc}</p>
          <div className='flex flex-wrap justify-between items-center md:gap-0 gap-4'>
            {props?.list.map((el, index) => (
              <div
                className='lg:text-[38px] text-1xl mb-8 basis-[30%]'
                key={index}
                dangerouslySetInnerHTML={{
                  __html: el,
                }}
              ></div>
            ))}
          </div>
        </div>
        </div>
      ) : (
        <div className='bg-black lg:py-20 py-8'>
          <div className='container'>
            <div className='flex flex-wrap justify-between items-center'>
              <div className='lg:basis-[25%] basis-[100%]'>
                <h2 className='font-bold lg:text-4xl text-1-xl  text-white'>
                  {props.title}
                </h2>
              </div>
              <div className='lg:basis-[70%] basis-[100%] flex flex-wrap justify-between lg:pl-16'>
                {props?.list.map((el, index) => (
                  <div
                    className='lg:text-[38px] text-1xl my-4 basis-[45%] text-white'
                    key={index}
                    dangerouslySetInnerHTML={{
                      __html: el,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default Process
