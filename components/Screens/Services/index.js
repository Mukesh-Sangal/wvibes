'use client'
import React, { useState, useEffect } from 'react'
import getPageData from '../../../utils/ApiMapWithType'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'
import Banner from './Banner'
import ServicesSections from './ServicesSections'
import Process from './Process'
import Hire from './Hire'
import { Skeleton } from '../../../components/ui/skeleton'
import TopFooter from './TopFooter'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/ui/accordion'

const Services = () => {
  const [data, setData] = useState([])
  console.log(data,'Services')
  const backend_url = 'http://free.lndo.site:8000'
  useEffect(() => {
    const fetchData = async () => {
      const apiPageUrl = `${backend_url}/node_title/services`
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
          const dataToShow = item[0].type
          switch (dataToShow) {
            case 'Banner':
              return (
                <div key={index}>
                  <Banner
                    title={item[0].field_banner_title}
                    imgurl={`${backend_url}${item[0].field_banner_image}`}
                  />
                </div>
              )
            case 'Box layout':
              return (
                <div key={index} className='container'>
                  <h2 className='text-center mb-20 font-bold text-4xl'>
                    {item[0].field_section_1_services}
                  </h2>
                  <div className='flex items-stretch flex-wrap'>
                    {item.map((el, i) => (
                      <div key={i} className='basis-1/2'>
                        <ServicesSections
                          title={el.field_heading}
                          desc={el.field_subheading}
                          bgColor={
                            i === 0 || i === 3 || i === 4 || i === 7 || i === 8
                              ? 'bg-sky-600'
                              : 'bg-white'
                          }
                          color={
                            i === 0 || i === 3 || i === 4 || i === 7 || i === 8
                              ? 'text-white'
                              : 'text-sky-600'
                          }
                          desColor={
                            i === 0 || i === 3 || i === 4 || i === 7 || i === 8
                              ? 'text-white'
                              : 'text-black'
                          }
                        />
                      </div>
                    ))}
                  </div>
                  <div className='flex justify-center items-center py-20'>
                    <Link href=''>
                      <Button variant='outline' className='text-xl'>
                        {item[0].field_section_link}
                      </Button>
                    </Link>
                  </div>
                </div>
              )
            case 'Title With Desc Main':
              return (
                <div key={index}>
                  <Process
                    title={item[0].field_title}
                    desc={item[0].field_desc}
                    list={item[0].field_title_with_desc_heading.split(',')}
                  />
                </div>
              )
            case 'faq':
              return (
                <div className='container text-center py-20' key={index}>
                  <h2 className='text-center mb-20 font-bold text-4xl'>
                    {item[0].field_faq_title}
                  </h2>
                  <Accordion
                    type='single'
                    collapsible
                    className='w-full max-w-sm mx-auto'
                  >
                    {item.map((el, i) => (
                      <AccordionItem value={`item-${i}`} key={`item-${i}`}>
                        <AccordionTrigger>{el.field_question}</AccordionTrigger>
                        <AccordionContent>{el.field_answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              )
            case 'Title Heading With Cta':
              return (
                <div key={index}>
                  <Hire
                    title={item[0].field_cta_section_heading}
                    link={item[0].field_cta_link}
                    list={item}
                    value='field_cta_subheading'
                  />
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
export default Services