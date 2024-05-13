import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import CaseStudy from './CaseStudy'
import CaseStudyText from './CaseStudyText'
import axios from 'axios'

const CaseStudies = ({ data }) => {
  const [paragraphData, setParagraphData] = useState([])
  const backendUrl = 'https://dev-growwives.pantheonsite.io';
  const fetchData = async () => {
    try {
      const username = 'root' // Replace with your actual username
      const password = 'root' // Replace with your actual password
      const basicAuth = 'Basic ' + btoa(username + ':' + password)
      const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': 'szJC88DuD0ncIhjySAH_QrqFLCcZTvyquq_-OMJAltk',
        Authorization: basicAuth, // Add the Authorization header
      }
      const promises = data.field_case_study_ref.map(async (reference) => {
        const response = await axios.get(
          `${backendUrl}/entity/paragraph/${reference.target_id}?_format=json`,
          { headers }
        )
        return response.data
      })
      const fetchedData = await Promise.all(promises)
      setParagraphData(fetchedData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [data])

  return (
    <div>
      {/* Render child components */}
      {paragraphData.map((paragraph, index) => {
        switch (paragraph.type[0].target_id) {
          case 'case_study_banner':
            return <Banner key={index} data={paragraph} imgDom={backendUrl} />
          case 'case_study':
            return (
              <CaseStudy key={index} data={paragraph} imgDom={backendUrl} />
            )
          case 'case_study_text_and_disc':
            return (
              <CaseStudyText key={index} data={paragraph} imgDom={backendUrl} />
            )
          default:
            return null
        }
      })}
    </div>
  )
}

export default CaseStudies
