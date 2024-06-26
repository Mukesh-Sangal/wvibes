import React from 'react'

const ServicesSections = (props) => {
  return (
    <div
      className={`lg:p-10 p-7 ${props.bgColor} flex flex-col justify-start flex-wrap`}
    >
      <h3
        className={`lg:text-[38px] text-1-xl ${props.color} lg:mb-10 mb-4 font-semibold`}
        dangerouslySetInnerHTML={{
          __html: props.title,
        }}
      >
      </h3>
      <p className={`md:text-1xl text-xl ${props.desColor} lg:mb-10 mb-4 `}>
        {props.desc}
      </p>
    </div>
  )
}

export default ServicesSections
