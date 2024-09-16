'use client'
import React, { useState, useEffect, useMemo } from 'react'
import dynamic from 'next/dynamic'
import axios from 'axios'
import { Skeleton } from '../../../components/ui/skeleton'

// Dynamically import the components
const Banner = dynamic(() => import('./Banner'))
const CaseStudy = dynamic(() => import('./CaseStudy'))
const CaseStudyText = dynamic(() => import('./CaseStudyText'))

const CaseStudies = ({ data, imgDom }) => {
  const [paragraphData, setParagraphData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!data?.field_case_study_ref) {
          throw new Error('No case study references found.')
        }

        const username = 'growibes'
        const password = 'Jaibholenath@1989'
        const basicAuth = 'Basic ' + btoa(username + ':' + password)
        const csrfResponse = await fetch(`${imgDom}/session/token`)
        const csrfToken = await csrfResponse.text()
        const headers = {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken,
          Authorization: basicAuth,
        }
        const promises = data.field_case_study_ref.map(async (reference) => {
          const response = await axios.get(
            `${imgDom}/entity/paragraph/${reference.target_id}?_format=json`,
            { headers }
          )
          return response.data
        })
        const fetchedData = await Promise.all(promises)
        setParagraphData(fetchedData)
      } catch (err) {
        setError(err)
        console.error('Error fetching data:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [data, imgDom])

  const renderedItems = useMemo(() => {
    if (!paragraphData.length) return null

    return paragraphData.map((paragraph, index) => {
      switch (paragraph.type[0]?.target_id) {
        case 'case_study_banner':
          return <Banner key={index} data={paragraph} imgDom={imgDom} />
        case 'case_study':
          return <CaseStudy key={index} data={paragraph} imgDom={imgDom} />
        case 'case_study_text_and_disc':
          return <CaseStudyText key={index} data={paragraph} imgDom={imgDom} />
        default:
          return null
      }
    })
  }, [paragraphData, imgDom])

  if (loading) {
    return (
      <div className='flex items-center justify-center space-x-4 h-[70vh]'>
        <Skeleton className='h-12 w-12 rounded-full' />
        <div className='space-y-2'>
          <Skeleton className='h-4 w-[250px]' />
          <Skeleton className='h-4 w-[200px]' />
        </div>
      </div>
    )
  }

  if (error) {
    return <div>Error loading data: {error.message}</div>
  }

  return <div>{renderedItems}</div>
}

export default CaseStudies
