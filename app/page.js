import Image from 'next/image'
import getPageData from './helpers/ApiMapWithType'
import { Children } from 'react'
import BannerLayout from '@/components/innerPageBanner/Banner'
import PowerHouse from '@/components/PowerHouse.js/PowerHouse'
import LetsBuild from '@/components/LetsBuild/LetsBuild'

export default async function Home() {
  const apis = await getPageData(
    `http://free.lndo.site:8000/node_title/home%20page`
  )
  console.log(apis[3],'api')
  return (
    <>
      <BannerLayout data={apis[0]}/>
      <PowerHouse data={apis[2]}/>
      <LetsBuild data={apis[3]}/>
    </>
  )
}