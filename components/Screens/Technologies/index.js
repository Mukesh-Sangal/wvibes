'use client'
import React, { useState, useEffect } from 'react'
import getPageData from '../../../utils/ApiMapWithType'
import TechBanner from './TechBanner'
import TechDesign from './TechDesign'
import TechGrow from './TechGrow'
import TechWeServe from './TechWeServe'
import TopFooter from './TopFooter'
const Technologies = () => {
  const [data, setData] = useState([])
  console.log(data,'Data')
  const backend_url = 'http://free.lndo.site:8000'
  useEffect(() => {
    const fetchData = async () => {
      const apiPageUrl = `${backend_url}/node_title/technologies`
      const apis = await getPageData(apiPageUrl)
      setData(apis)
    }
    fetchData()
  }, [])
  return (
    <div>
      {data?.length ? (
        data.map((item, index) => {
          // Assuming each sub-array has only one object
          const dataToShow = item[0]?.type
          switch (dataToShow) {
            case 'Home Page Banner':
              return <TechBanner data={item} imgDom={backend_url} />
            case 'Lets Build head subhead img':
              return <TechGrow data={item} imgDom={backend_url} />
            case 'Title Heading With Cta':
              return <TechDesign data={item} />
            case 'Technologies We Serve':
              return <TechWeServe data={item} imgDom={backend_url} />
            case 'Cta Heading Link Image':
              return (
                <div key={index}>
                  <TopFooter
                    title={item[0].field_cta_head}
                    link={item[0].field_cta_image_link}
                    imgurl={`${backend_url}${item[0].field_cta_bg_image}`}
                  />
                </div>
              )
            default:
              return null // Render nothing for unknown data-to-show values
          }
        })
      ) : (
        <div className='flex items-center space-x-4 h-[70vh] '>No Data</div>
      )}
    </div>
  )
}

export default Technologies
