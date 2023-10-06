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
const About = () => {
  const [data, setData] = useState([])
  const backend_url = 'https://dev-growwives.pantheonsite.io'
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
              return <InnerBanner data={item} />
            case 'About us First Section':
              return <AboutUs data={item} />
            case 'Home Portfolio' :
              return <AboutUsProjects data={item}/>
            case 'Our Mission':
              return <OurMission data={item} />
            case 'About Digital Experiences':
              return <LetsStartTopNotch data={item} />
            case 'Our Team':
              return <OurTeam data={item} imgdom={backend_url} />
            case 'About lando today':
              return <StartWithLando data={item} imgdom={backend_url} />
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

export default About
