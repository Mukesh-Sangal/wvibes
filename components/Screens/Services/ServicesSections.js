import React from 'react'

const ServicesSections = (props) => {
  return (
    <div className={`p-10 ${props.bgColor} flex flex-col justify-start`}>
      <h3 className={`text-2xl ${props.color} mb-10 font-semibold`}>
        {props.title}
      </h3>
      <p className={`text-lg ${props.desColor} mb-10`}>{props.desc}</p>
    </div>
  )
}

export default ServicesSections
