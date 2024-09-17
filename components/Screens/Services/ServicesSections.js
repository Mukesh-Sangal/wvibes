import React, { memo } from 'react'

const ServicesSections = memo(({ bgColor, color, desColor, title, desc }) => {
  return (
    <div
      className={`lg:p-10 p-7 ${bgColor} flex flex-col justify-start flex-wrap`}
    >
      <h3
        className={`lg:text-[38px] text-xl ${color} lg:mb-10 mb-4 font-semibold`}
        dangerouslySetInnerHTML={{ __html: title }} // Be sure to sanitize if needed
      />
      <p className={`md:text-1xl text-xl ${desColor} lg:mb-10 mb-4`}>{desc}</p>
    </div>
  )
})

export default ServicesSections
