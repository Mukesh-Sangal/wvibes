import React from 'react'
import getPageData from '../helpers/ApiMapWithType'
import axios from 'axios'

export default async function Home() {
   const apiss = await getPageData(`http://free.lndo.site:8000/node_title/services`)
   console.log(apiss,'Home Main Page')
  return (
    <div className="text-red text-center font-bold">
    </div>
  )
}
