'use client'
import React, { useState, useEffect } from 'react'
import getPageData from '../../utils/ApiMapWithType'
import InnerBanner from '../../components/Screens/Blog/InnerBanner'
import NewSliderComponent from '../../components/Screens/Blog/NewSliderComponent'
import { Skeleton } from '../../components/ui/skeleton'
const Home = () => {
  const [data, setData] = useState([])
  // console.log(data, 'Home page')
  const backend_url = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
  useEffect(() => {
    const fetchData = async () => {
      const apiPageUrl = `${backend_url}/node_title/blogs`
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
          // console.log(item, 'items')
          const dataToShow = item[0]?.type
          switch (dataToShow) {
            case 'Banner':
              return (
                <div key={index}>
                  <InnerBanner data={item} imgDom={backend_url} />
                </div>
              )
            case 'BlogItems':
            return (
              <div>
                <NewSliderComponent data={item} imgDom={backend_url} />
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

export default Home
