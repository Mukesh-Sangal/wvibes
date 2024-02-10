'use client'
import React, { useState, useEffect } from 'react'
import getPageData from '../../../utils/ApiMapWithType'
import { Skeleton } from '../../ui/skeleton'
import Location from './Location'
const ContactLocation = () => {
  const [data, setData] = useState([])
  const backend_url = 'https://dev-growwives.pantheonsite.io'
  useEffect(() => {
    const fetchData = async () => {
      const apiPageUrl = `${backend_url}/node_title/contact`
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
            case 'Office Location':
              return (
                <div key={index}>
                  <Location data={item} imgDom={backend_url}/>
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

export default ContactLocation
