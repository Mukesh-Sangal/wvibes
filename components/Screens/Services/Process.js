import React from 'react'

const Process = (props) => {
  return (
    <div>
      {props.desc !== '' ? (
        <div className='container py-8'>
          <h2 className='mb-8 font-semibold text-5xl'>{props.title}</h2>
          <p className='text-2xl mb-10'>{props.desc}</p>
          <div className='flex flex-wrap justify-between items-center'>
            {props?.list.map((el, index) => (
              <div className='text-5xl font-bold mb-8 basis-[30%]' key={index}>
                {el}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='bg-black py-20'>
          <div className='container'>
            <div className='flex flex-wrap justify-between items-center'>
              <div className='basis-[25%]'>
                <h2 className='font-bold text-4xl text-white'>{props.title}</h2>
              </div>
              <div className='basis-[70%] flex flex-wrap justify-between items-center'>
                {props?.list.map((el, index) => (
                  <div
                    className='text-3xl font-[500] my-10 basis-[45%] text-white'
                    key={index}
                  >
                    {el}
                  </div>
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
