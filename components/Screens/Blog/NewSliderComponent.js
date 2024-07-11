import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import urlExtractor from 'utils/urlExtractor'

const BlogListing = ({ data, imgDom }) => {
  const [blogs, setBlogs] = useState([])
  const [filteredBlogs, setFilteredBlogs] = useState([])
  const [technology, setTechnology] = useState('All')
  const [technologies, setTechnologies] = useState([])

  useEffect(() => {
    // Initialize blogs from props and extract unique technologies
    setBlogs(data)
    setFilteredBlogs(data)
    const techs = [
      ...new Set(data.map((blog) => blog.field_technologies_reference)),
    ]
    setTechnologies(techs)
  }, [data])

  useEffect(() => {
    if (technology && technology !== 'All') {
      const filtered = blogs.filter(
        (blog) => blog.field_technologies_reference === technology
      )
      setFilteredBlogs(filtered)
    } else {
      setFilteredBlogs(blogs)
    }
  }, [technology, blogs])

  return (
    <div className='flex flex-wrap'>
      <aside
        // style={{ width: '15%', padding: '10px', borderRight: '1px solid #ddd' }}
        className='lg:w-[15%] w-full p-2 border-l-2 border-[#ddd]'
      >
        <h2 className='text-xl font-bold text-[#DC248B] pb-6 mt-16'>
          Technologies
        </h2>
        <ul>
          <li
            onClick={() => setTechnology('All')}
            className={`cursor-pointer py-2 px-2 ${
              technology === 'All'
                ? 'bold font-bold bg-black text-white'
                : 'normal'
            }`}
          >
            All
          </li>
          {technologies.map((tech, index) => (
            <li
              key={index}
              onClick={() => setTechnology(tech)}
              className={`cursor-pointer  py-2 px-2 ${
                technology === tech
                  ? 'font-bold bg-black text-white'
                  : 'font-normal'
              }`}
            >
              {tech}
            </li>
          ))}
        </ul>
      </aside>
      <main className='lg:w-[85%] w-full p-3'>
        {/* <h2>{blog.field_slider_title}</h2>
        <h3>{blog.field_slider_subtitle}</h3> */}
        {filteredBlogs.map((blog, index) => (
          <div key={index} className='lg:ml-24 mb-5 mt-12'>
            <h2 className='lg:text-2xl text-xl font-bold text-black mb-8 '>
              {blog.field_slider_desc}
            </h2>
            <Image
              src={imgDom + blog.field_slider_image}
              alt={blog.field_slider_title}
              width={600}
              height={500}
              className='w-full lg:h-[500px] object-cover'
            />
            <h2 className='lg:text-1xl text-xl font-medium text-black mb-8 mt-8 '>
              {blog.field_blog_description_trimmed}
            </h2>
            <Link
              href={`/blogs/${urlExtractor(blog.field_slider_link)[1]}`}
              key={index}
              className='brand-expertise lg:mt-6 mt-4 mb-4 inline-block'
            >
              {urlExtractor(blog.field_slider_link)[0]}
            </Link>
          </div>
        ))}
      </main>
    </div>
  )
}

export default BlogListing
