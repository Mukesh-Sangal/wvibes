import React from 'react'

const CaseStudyText = ({ data }) => {
  console.log(data,'Text data')
  return (
    <div className='mb-24'>
      <div className='container'>
        <div>
          <h2 className='text-2xl text-dark font-bold mb-9'>
            {data.field_text_title[0].value}
          </h2>
          <h3
          className='text-dark text-1xl leading-11'
            dangerouslySetInnerHTML={{
              __html: data.field_text_description[0].value,
            }}
          >
          </h3>
        </div>
      </div>
    </div>
  )
}



export default CaseStudyText