import React from 'react'

const CaseStudyText = ({ data }) => {
  console.log(data,'Text And Desc Blog');
  return (
    <div className='mb-24 mt-16'>
      <div className='container'>
        <div>
          <h2 className='text-2xl text-dark font-bold mb-9'>
            {data?.field_section[0]?.value}
          </h2>
          <h3 className='text-1xl text-dark font-bold mb-9'>
            {data?.field_text_title[0]?.value}
          </h3>
          {data.field_text_description.map((item, index) => (
            <h3
              className='text-dark text-1xl leading-11'
              key={index}
              dangerouslySetInnerHTML={{
                __html: item.value,
              }}
            ></h3>
          ))}
        </div>
      </div>
    </div>
  )
}



export default CaseStudyText