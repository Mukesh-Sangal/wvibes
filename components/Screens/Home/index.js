'use client'
import React, { useState, useEffect } from 'react'
import getPageData from '../../../utils/ApiMapWithType'
import BannerLayout from './BannerLayout'
import DrupalProjects from './DrupalProjects'
import PowerHouse from './PowerHouse'
import LetsBuild from './LetsBuild'
import LinkWithTitle from './LinkWithTitle'
import HireaDrupalDeveloper from './HireaDrupalDeveloper'
import DigitalGrowDiscover from './DigitalGrowDiscover'
import TopFooter from '../../TopFooter/TopFooter'
import { Skeleton } from '../../../components/ui/skeleton'
const Home = () => {
  const [data, setData] = useState([])
  const backend_url = 'https://dev-growwives.pantheonsite.io'
  useEffect(() => {
    const fetchData = async () => {
      const apiPageUrl = `${backend_url}/node_title/home%20page`
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
            case 'Home Page Banner':
              return (
                <div key={index}>
                  <BannerLayout data={item} />
                </div>
              )
            case 'Home Portfolio':
              return (
                <div key={index}>
                  <DrupalProjects data={item} />
                </div>
              )
            case 'Drupal  Power  House  Customizations':
              return (
                <div key={index}>
                  <PowerHouse data={item} />
                </div>
              )
            case 'Lets Build head subhead img':
              return (
                <div key={index}>
                  <LetsBuild data={item} imgDom={backend_url} />
                </div>
              )
            case 'Home Page We Help Agencies':
              return (
                <div key={index}>
                  <LinkWithTitle data={item} />
                </div>
              )
            case 'Title Heading With Cta':
              return (
                <div key={index}>
                  <HireaDrupalDeveloper data={item} />
                </div>
              )
            case 'Home Cta Services':
              return (
                <div key={index}>
                  <DigitalGrowDiscover data={item} imgDom={backend_url} towCol="two-col" />
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
