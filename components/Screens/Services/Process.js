import React from 'react'

const Process = (props) => {
  return (
    <div>
      {props.desc !== '' ? (
        <div className='container'>
          <h2 className='mb-8 font-semibold lg:text-4xl md:text-3xl text-1-xl'>
            {props.title}
          </h2>
          <p className='lg:text-2xl text-xl mb-10'>{props.desc}</p>
          <div className='flex flex-wrap justify-between items-center md:gap-0 gap-4'>
            {props?.list.map((el, index) => (
              <div
                className='lg:text-3xl md:text-2xl text-1xl  font-bold mb-8 basis-[30%]'
                key={index}
                dangerouslySetInnerHTML={{
                  __html: el,
                }}
              ></div>
            ))}
          </div>
        </div>
      ) : (
        <div className='bg-black lg:py-20 py-8'>
          <div className='container'>
            <div className='flex flex-wrap justify-between items-center'>
              <div className='lg:basis-[25%] basis-[100%]'>
                <h2 className='font-bold lg:text-4xl md:text-3xl text-1-xl text-white'>
                  {props.title}
                </h2>
              </div>
              <div className='lg:basis-[70%] basis-[100%] flex flex-wrap justify-between items-center'>
                {props?.list.map((el, index) => (
                  <div
                    className='lg:text-3xl md:text-2xl text-1xl font-[500] my-10 basis-[45%] text-white'
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
