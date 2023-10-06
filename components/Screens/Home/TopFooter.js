import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'

const TopFooter = (props) => {
  const backend_url = 'http://free.lndo.site:8000'
  return (
    <div className='container'>
      <div className='banner flex flex-wrap justify-between align-center pt-20'>
        <div className='basis-[100%] font-bold flex flex-wrap justify-between'>
          <h1 className='text-5xl basis-[60%]'>{props.title}</h1>
          <Link href=''>
            <Button variant='outline' className='bg-[transparent] my-10'>
              {props.link}
            </Button>
          </Link>
        </div>
        <div className='basis-[100%] flex flex-col justify-center'>
          <Image
            src={props.imgurl}
            alt={props.title}
            width={1590}
            height={250}
            priority
            unoptimized
            loading='eager'
            className='max-w-[100%] w-[100%]  h-[250px] ml-auto object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default TopFooter
