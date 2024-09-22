'use client'

import React, { useState, useEffect, Suspense } from 'react'
import getPageData from '../../../utils/ApiMapWithType'
import { Skeleton } from '../../../components/ui/skeleton'

// Mapping component names to dynamic imports
const dynamicComponentMap = {
  'Home Page Banner': () => import('./BannerLayout'),
  'Our Clients': () => import('./OurClients'),
  'Home Portfolio': () => import('./DrupalProjects'),
  'Drupal  Power  House  Customizations': () => import('./PowerHouse'),
  'Lets Build head subhead img': () => import('./LetsBuild'),
  'Slider Component': () => import('./SlideComponent'),
  Improve: () => import('./CounterUp'),
  'Home Page We Help Agencies': () => import('./LinkWithTitle'),
  'Title Heading With Cta': () => import('./HireaDrupalDeveloper'),
  'Home Cta Services': () => import('./DigitalGrowDiscover'),
  'Cta Heading Link Image': () => import('../../TopFooter/TopFooter'),
}

// Utility function to dynamically load components based on the component name
const loadComponent = (componentName) => {
  if (dynamicComponentMap[componentName]) {
    return React.lazy(dynamicComponentMap[componentName])
  }
  return null
}

const Home = () => {
  const [data, setData] = useState([])
  const backend_url = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
  // console.log(data, 'Home page')
  useEffect(() => {
    const fetchData = async () => {
      const apiPageUrl = `${backend_url}/node_title/home%20page`
      const apis = await getPageData(apiPageUrl)
      setData(apis)
    }
    fetchData()
  }, [backend_url])

  return (
    <div>
      {data?.length ? (
        data.map((item, index) => {
          const dataToShow = item[0]?.type
          const DynamicComponent = loadComponent(dataToShow) // Load dynamically

          if (DynamicComponent) {
            return (
              <Suspense fallback={<Skeleton />} key={index}>
                <DynamicComponent
                  key={index}
                  data={item}
                  imgDom={backend_url}
                />
              </Suspense>
            )
          }
          return null // If no matching component is found
        })
      ) : (
        <div className='flex items-center justify-center space-x-4 h-[70vh]'>
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
