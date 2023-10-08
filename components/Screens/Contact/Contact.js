'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
// import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { isValidPhoneNumber } from 'react-phone-number-input'
import axios from 'axios'
const Contact = () => {
  const [phoneValue, setPhoneValue] = useState()
  const [isValidNumber, setIsValidNumber] = useState(false)
  const [formStatus, setFormStatus] = useState({
    status: 'success | error | fetching',
    message: '',
  })
  const handleSubmit = async (e) => {
    e.preventDefault()
    let data = new FormData(e.target)
    data.append('webform_id', 'contact_us')
    data = JSON.stringify(Object.fromEntries(data))
    console.log(data, 'Values')
    setFormStatus({ status: 'fetching' })
    try {
      const response = await axios.post(
        'https://dev-growwives.pantheonsite.io/webform_rest/submit',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      if (response.status === 200) {
        e.target.reset()
        setPhoneValue('')
        return setFormStatus({
          status: 'success',
          message: 'Form has been submitted successfully.',
        })
      }
    } catch (error) {
      console.error('Submission error:', error)
      return setFormStatus({
        status: 'error',
        message: 'An error occured please try again.',
      })
    }
  }
  const [submit, setSubmit] = useState(false)
  const handlePhoneNumberChange = (phoneValue) => {
    setPhoneValue(phoneValue)
    if (phoneValue) {
      setIsValidNumber(isValidPhoneNumber(phoneValue))
    }
  }
  useEffect(() => {
    if (phoneValue && !isValidNumber) {
      setSubmit(true)
    } else {
      setSubmit(false)
    }
  }, [phoneValue])

  return (
    <section className='container spacing'>
      <div className='grid md:grid-cols-2 grid-cols-1'>
        <article className='w-full h-full'>
          <Image src='/digital.png' width={1920} height={100} className='h-full object-cover' />
        </article>
        <article className='block lg:px-16 px-4 rounded w-full pb-10'>
          <form onSubmit={handleSubmit}>
            <header className='heading-bar-bottom font-bold lg:text-3xl text-2xl'>
              Contact Us
            </header>
            <p className='text-[#030303] lg:text-1xl text-xl'>
              Explore the future with us.
            </p>
            <p className='text-[#030303] lg:text-1xl text-xl mb-4'>
              Feel free to get in touch.
            </p>
            {formStatus?.message && (
              <p
                className={`py-3 px-4 border mb-[12px]" ${
                  formStatus?.status === 'success' &&
                  'border-green bg-green text-white'
                } ${
                  formStatus?.status === 'error' &&
                  'border-red bg-red text-white'
                }`}
              >
                {formStatus.message}
              </p>
            )}
            <div className='grid grid-cols-1'>
              <div className='form-group md:mb-6 mb-2 mt-2'>
                <input
                  type='text'
                  className='form-control block w-full px-3 py-1.5 text-base font-normal text-formLabel bg-white bg-clip-padding border-inputborder transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none'
                  name='full_name'
                  aria-describedby='full_name'
                  placeholder='Your Name*'
                  required
                />
              </div>
              <div className='form-group md:mb-6 mb-2'>
                <input
                  type='email'
                  className='form-control block w-full px-3 py-1.5 text-base font-normal text-formLabel bg-white bg-clip-padding  border-inputborder transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none'
                  name='email'
                  placeholder='Email address*'
                  required
                />
              </div>
              <div className='form-group md:mb-6 mb-2'>
                <PhoneInput
                  international
                  defaultCountry='IN'
                  value={phoneValue}
                  onChange={handlePhoneNumberChange}
                  defaultValue=''
                  placeholder='Contact Number'
                  name='phone_number'
                  limitMaxLength='15  '
                  className='PhoneInput form-control block w-full text-base font-normal text-formLabel bg-white bg-clip-padding border-inputborder transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none'
                />
                {phoneValue && (
                  <>
                    {isValidNumber ? (
                      <p className='text-green mt-2'>Valid phone number!</p>
                    ) : (
                      <p className='text-red'>
                        Invalid phone number. Please enter valid phone number!
                      </p>
                    )}
                  </>
                )}
              </div>
              <div className=' md:mb-6 mb-2'>
                <textarea
                  className='form-control block w-full px-3 py-1.5 text-base font-normal text-formLabel bg-white bg-clip-padding border border-solid border-inputborder transition ease-in-out m-0 focus:outline-none'
                  rows='5'
                  placeholder='Write your message here...*'
                  required
                  name='message'
                ></textarea>
              </div>
              <span className='md:mb-6 mb-2 text-[#030303] text-lg'>
                How can we get better?
              </span>
              {/* <span className='md:mb-6 mb-2 text-formText text-sm'>
                Fields marked with an * are mandatory.
              </span> */}
            </div>
            <div className='text-left'>
              <input
                type='submit'
                className={`disabled:opacity-50 disabled:cursor-default disabled:hover:bg-[#3164f4] disabled:hover:text-white w-[60%] rounded cursor-pointer place-content-end border-[#3164f4] border px-6 py-2.5 bg-[#3164f4]  text-white font-bold text-base leading-tight shadow-md hover:bg-white hover:text-red hover:border-red hover:border hover:shadow-lg transition-all ease-out duration-200 `}
                disabled={submit || formStatus?.status === 'fetching'}
                value={
                  formStatus?.status === 'fetching'
                    ? 'SUBMITTING...'
                    : 'Send Message'
                }
              ></input>
            </div>
            {/* <GoogleReCaptchaProvider reCaptchaKey='6LeNnKgkAAAAAKfvpmxL2iVqwYtFvovRnVIg6BVu' /> */}
          </form>
        </article>
      </div>
      <p className='lg:mt-20 mt-8 text-[#030303] lg:text-1-xl text-1xl text-center'>
        Lets Connect to take a leap forward towards your digital growth
      </p>
    </section>
  )
}

export default Contact
