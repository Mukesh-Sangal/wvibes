'use client'
import React, { useState, useEffect } from 'react'
import CaseStudies from '../../../components/Screens/CaseStudies'
export default function Products({ params }) {
  const backend_url = 'https://dev-growwives.pantheonsite.io'
   const [data, setData] = useState([])
  //  console.log(data,'Cse Study Data')
  // Fetch data based on the content ID
  const fetchData = async () => {
    try {
       const apipageUrl = `${backend_url}/node/${params.id}?_format=json`
       const res = await fetch(`${apipageUrl}`)
       const apidata = await res.json()
       setData(apidata)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='mt-[64px]'>
      <CaseStudies data={data}/>
    </div>
  )
}
