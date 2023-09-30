import React from 'react'
import getPageData from '../helpers/ApiMapWithType'

export default async function About() {
  const apiss = await getPageData(
    `http://free.lndo.site:8000/node_title/about`
  )
  console.log(apiss, 'About Page')
  return <div className='text-red text-center font-bold'></div>
}
