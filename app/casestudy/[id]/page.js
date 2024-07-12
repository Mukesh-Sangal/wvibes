'use client'
import React, { useState, useEffect } from 'react'
import CaseStudies from '../../../components/Screens/CaseStudies'
export default function Products({ params }) {

  const backend_url = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
  const [data, setData] = useState([])
  // Paramid recieved from the parameters
    //  console.log(params.id, 'id of the data')
  // Fetch data based on the content ID
  const fetchData = async () => {
    try {
      // Fetch data based on the path alias instead of params.id
      const apipageUrl = `${backend_url}/${params.id}?_format=json`
      console.log(apipageUrl,'Api Url')
      const res = await fetch(apipageUrl)
      const apidata = await res.json()
      setData(apidata)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [params.id]) 

  return (
    <div className='mt-[64px]'>
      <CaseStudies data={data} imgDom={backend_url} />
    </div>
  )
}
