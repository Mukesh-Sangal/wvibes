'use client'
import React, { useState, useEffect } from 'react'
import getPageData from '../../../utils/ApiMapWithType'
import ServicesBanner from './ServicesBanner'
import ServicesSecond from './ServicesSecond'
import ImageTitleLink from './ImageTitleLink'
import GlobalCta from '../../GlobalCta/GlobalCta'
import BrandManagement from './BrandManagement'
import Paragraph from './Paragraph'
import { Skeleton } from '../../../components/ui/skeleton'
const ServicesDetail = () => {
  const [data, setData] = useState([])
  const backend_url = 'https://dev-growwives.pantheonsite.io'
  useEffect(() => {
    const fetchData = async () => {
      const apiPageUrl = `${backend_url}/node_title/digital%20services`
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
            case 'Services Banner':
              return (
                <div key={index}>
                  <ServicesBanner data={item} imgDom={backend_url} />
                </div>
              )
            case 'Services Counter Main':
              return (
                <div key={index}>
                  <ServicesSecond
                    data={item}
                    imgDom={backend_url}
                    imgOrder='last'
                    column='four'
                  />
                </div>
              )
            case 'Services Digital Asset Management':
              return (
                <div key={index}>
                  <ImageTitleLink data={item} imgDom={backend_url} />
                </div>
              )
            case 'Management Paragraph':
              return (
                <div key={index}>
                  <Paragraph data={item} />
                </div>
              )
            case 'Brand Management at Scale':
              return (
                <div key={index}>
                  <BrandManagement data={item} imgDom={backend_url} />
                </div>
              )
            case 'Global Cta':
              return (
                <div key={index}>
                  <GlobalCta data={item} imgDom={backend_url} />
                </div>
              )
            default:
              return null // Render nothing for unknown data-to-show values
          }
        })
      ) : (
        <div className='flex items-center justify-center space-x-4 h-[70vh] '>
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

export default ServicesDetail
