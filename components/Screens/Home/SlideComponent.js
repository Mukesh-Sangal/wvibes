import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import urlExtractor from 'utils/urlExtractor'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// import required modules
import { FreeMode, Autoplay, Navigation } from 'swiper/modules'
import { useSwiper } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FcPrevious, FcNext } from 'react-icons/fc'

const SlideComponent = ({ data, imgDom }) => {
   const swiper = useSwiper()
  return (
    <div className='bg-white  text-dark text-3xl'>
      <div className='py-12 md:container'>
        <h1 className='md:text-4xl text-1-xl text-yellow-300 font-bold'>
          {data[0].field_slider_title}
        </h1>
        <h2 className='md:text-1-xl text-1xl text-black font-bold'>
          {data[0].field_slider_subtitle}
        </h2>
      </div>
      <Swiper
        slidesPerView={3}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[FreeMode, Autoplay, Navigation]}
        className='mySwiper lg:py-36'
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Link
                href={urlExtractor(item.field_slider_link)[1]}
                key={index}
                className='Slider-hover text-black hover:text-yellow-300 relative text-left'
              >
                <Image
                  src={`${imgDom}${item.field_slider_image}`}
                  loading='lazy'
                  alt='Image'
                  width={1920}
                  height={600}
                  className='scale-100 img-hov hover:after:bg-dark/[.5] hover:after:opacity-100 after:relative after:h-full after:w-full after:transition-all after:duration-75 after:opacity-0 transition-all duration-300 ease-out lg:hover:scale-110'
                />
                <h2 className='md:text-1xl text-xl font-bold mt-12 bottom-line relative ml-8'>
                  {item.field_slider_desc}
                </h2>
              </Link>
            </SwiperSlide>
          )
        })}
        {/* <div className='slider-controler'>
          <div className='swiper-button-prev slider-arrow'>
            <FcPrevious />
          </div>
          <div className='swiper-button-next slider-arrow'>
            <FcNext />
          </div>
          <div className='swiper-pagination'></div>
        </div> */}
        <Link
          href={urlExtractor(data[0].field_contact)[1]}
          className='transparent-buttons lg:ml-8 lg:mt-16 ml-4 mt-8'
        >
          {urlExtractor(data[0].field_contact)[0]}
        </Link>
      </Swiper>
    </div>
  )
}
export default SlideComponent