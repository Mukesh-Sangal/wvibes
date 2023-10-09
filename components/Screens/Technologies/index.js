'use client'
import React, { useState, useEffect } from 'react'
import getPageData from '../../../utils/ApiMapWithType'
import TechBanner from './TechBanner'
import TechDesign from './TechDesign'
import TechGrow from './TechGrow'
import TechWeServe from './TechWeServe'
import TopFooter from '../../TopFooter/TopFooter'
import { Skeleton } from '../../../components/ui/skeleton'
const Technologies = () => {
  const [data, setData] = useState([])
  const backend_url = 'https://dev-growwives.pantheonsite.io'
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
              return (
                <div key={index}>
                  <TechBanner data={item} imgDom={backend_url} />
                </div>
              )
            case 'Lets Build head subhead img':
              return (
                <div key={index}>
                  <TechGrow data={item} imgDom={backend_url} />
                </div>
              )
            case 'Title Heading With Cta':
              return (
                <div key={index}>
                  <TechDesign data={item} />
                </div>
              )
            case 'Technologies We Serve':
              return (
                <div key={index}>
                  <TechWeServe data={item} imgDom={backend_url} />
                </div>
              )
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
        <div className='flex items-center space-x-4 h-[70vh] '>
          <Skeleton className='h-12 w-12 rounded-full' />
          <div className='space-y-2'>
            <Skeleton className='h-4 w-[250px]' />
            <Skeleton className='h-4 w-[200px]' />
          </div>
        </div>
      )}
    </div>
  )
}

export default Technologies
