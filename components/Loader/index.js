// components/Loading.js
import Image from 'next/image'
import '../../app/loader.css'

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-[70vh]'>
      <div className='animate-spin-logo'>
        <Image
          src='/logoo.webp'
          alt='Site Logo'
          width={200}
          height={200}
          className='rounded-full'
        />
      </div>
    </div>
  )
}

export default Loading
