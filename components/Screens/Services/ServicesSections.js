import React from 'react'

const ServicesSections = (props) => {
  return (
    <div className={`p-10 ${props.bgColor} flex flex-col justify-start flex-wrap`}>
      <h3 className={`md:text-2xl text-1-xl ${props.color} lg:mb-10 mb-4 font-semibold`}>
        {props.title}
      </h3>
      <p className={`md:text-1xl text-xl ${props.desColor} mb-10`}>{props.desc}</p>
    </div>
  )
}

export default ServicesSections
