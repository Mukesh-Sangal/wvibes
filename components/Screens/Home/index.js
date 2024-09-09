'use client'
import React, { useState, useEffect, Suspense } from 'react'
import getPageData from '../../../utils/ApiMapWithType'
import { Skeleton } from '../../../components/ui/skeleton'

const BannerLayout = React.lazy(() => import('./BannerLayout'))
const DrupalProjects = React.lazy(() => import('./DrupalProjects'))
const PowerHouse = React.lazy(() => import('./PowerHouse'))
const LetsBuild = React.lazy(() => import('./LetsBuild'))
const CounterUp = React.lazy(() => import('./CounterUp'))
const LinkWithTitle = React.lazy(() => import('./LinkWithTitle'))
const HireaDrupalDeveloper = React.lazy(() => import('./HireaDrupalDeveloper'))
const DigitalGrowDiscover = React.lazy(() => import('./DigitalGrowDiscover'))
const TopFooter = React.lazy(() => import('../../TopFooter/TopFooter'))
const SlideComponent = React.lazy(() => import('./SlideComponent'))
const OurClients = React.lazy(() => import('./OurClients'))

const Home = () => {
  const [data, setData] = useState([])
  const backend_url = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
  console.log(data, 'Home')

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
          const dataToShow = item[0]?.type
          switch (dataToShow) {
            case 'Home Page Banner':
              return (
                <Suspense fallback={<Skeleton />}>
                  <BannerLayout key={index} data={item} imgDom={backend_url} />
                </Suspense>
              )
            case 'Our Clients':
              return (
                <Suspense fallback={<Skeleton />}>
                  <OurClients key={index} data={item} imgDom={backend_url} />
                </Suspense>
              )
            case 'Home Portfolio':
              return (
                <Suspense fallback={<Skeleton />}>
                  <DrupalProjects key={index} data={item} />
                </Suspense>
              )
            case 'Drupal  Power  House  Customizations':
              return (
                <Suspense fallback={<Skeleton />}>
                  <PowerHouse key={index} data={item} />
                </Suspense>
              )
            case 'Lets Build head subhead img':
              return (
                <Suspense fallback={<Skeleton />}>
                  <LetsBuild key={index} data={item} imgDom={backend_url} />
                </Suspense>
              )
            case 'Slider Component':
              return (
                <Suspense fallback={<Skeleton />}>
                  <SlideComponent
                    key={index}
                    data={item}
                    imgDom={backend_url}
                  />
                </Suspense>
              )
            case 'Improve':
              return (
                <Suspense fallback={<Skeleton />}>
                  <CounterUp key={index} data={item} imgDom={backend_url} />
                </Suspense>
              )
            case 'Home Page We Help Agencies':
              return (
                <Suspense fallback={<Skeleton />}>
                  <LinkWithTitle key={index} data={item} />
                </Suspense>
              )
            case 'Title Heading With Cta':
              return (
                <Suspense fallback={<Skeleton />}>
                  <HireaDrupalDeveloper key={index} data={item} />
                </Suspense>
              )
            case 'Home Cta Services':
              return (
                <Suspense fallback={<Skeleton />}>
                  <DigitalGrowDiscover
                    key={index}
                    data={item}
                    imgDom={backend_url}
                    towCol='two-col'
                  />
                </Suspense>
              )
            case 'Cta Heading Link Image':
              return (
                <Suspense fallback={<Skeleton />}>
                  <TopFooter
                    key={index}
                    title={item[0].field_cta_head}
                    link={item[0].field_cta_image_link}
                    imgurl={`${backend_url}${item[0].field_cta_bg_image}`}
                  />
                </Suspense>
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
