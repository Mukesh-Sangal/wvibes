'use client'
import React, { useState, useEffect } from 'react'
import getPageData from '../../../utils/ApiMapWithType'
import InnerBanner from './InnerBanner'
import AboutUs from './AboutUs'
import AboutUsProjects from './AboutUsProjects'
import OurMission from './OurMission'
import LetsStartTopNotch from './LetsStartTopNotch'
import OurTeam from './OurTeam'
import StartWithLando from './StartWithLando'
import { Skeleton } from '../../../components/ui/skeleton'
const About = () => {
  const [data, setData] = useState([])
  const backend_url = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
  useEffect(() => {
    const fetchData = async () => {
      const apiPageUrl = `${backend_url}/node_title/about`
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
            case 'Banner':
              return (
                <div key={index}>
                  <InnerBanner data={item} imgDom={backend_url} />
                </div>
              )
            case 'About us First Section':
              return (
                <div key={index}>
                  <AboutUs data={item} imgDom={backend_url} />
                </div>
              )
            case 'Home Portfolio':
              return (
                <div key={index}>
                  <AboutUsProjects data={item} />
                </div>
              )
            case 'Our Mission':
              return (
                <div key={index}>
                  <OurMission data={item} />
                </div>
              )
            case 'About Digital Experiences':
              return (
                <div key={index}>
                  <LetsStartTopNotch data={item} imgDom={backend_url} />
                </div>
              )
            case 'Our Team':
              return (
                <div key={index}>
                  <OurTeam data={item} imgdom={backend_url} />
                </div>
              )
            case 'About lando today':
              return (
                <div key={index}>
                  <StartWithLando data={item} imgdom={backend_url} />
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

export default About
