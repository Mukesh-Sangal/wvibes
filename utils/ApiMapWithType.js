import axios from 'axios'
async function getPageData(apiPageUrl) {
  const result = await axios.get(apiPageUrl)
  const backendUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
  const apiMap = {
    Banner: `${backendUrl}/innerbanner/`,
    'Box Container': `${backendUrl}/what-we-do/`,
    'Title With Desc Main': `${backendUrl}/title-with-desc/`,
    Improve: `${backendUrl}/improving/`,
    'Lets Build head subhead img': `${backendUrl}/lets-build/`,
    'Home Portfolio': `${backendUrl}/home-page-section-1/`,
    'Home Page Banner': `${backendUrl}/home-banner/`,
    'Drupal  Power  House  Customizations': `${backendUrl}/home-page-section-2/`,
    'Home Page We Help Agencies': `${backendUrl}/help-agencies section-4/`,
    'Title Heading With Cta': `${backendUrl}/cta-section/`,
    'Home Cta Services': `${backendUrl}/home-services/`,
    'Cta Heading Link Image': `${backendUrl}/cta-with-image/`,
    faq: `${backendUrl}/faq-questions-ans/`,
    'About us First Section': `${backendUrl}/about-first/`,
    'Our Mission': `${backendUrl}/our-mission/`,
    'About Digital Experiences': `${backendUrl}/about-digital-experiences/`,
    'Slider Component': `${backendUrl}/slider/`,
    'Our Team': `${backendUrl}/our-team/`,
    'About lando today': `${backendUrl}/about-start-with-lando/`,
    'Technologies We Serve': `${backendUrl}/tech-we-serve/`,
    'Services Banner': `${backendUrl}/services-banner/`,
    'Services Counter Main': `${backendUrl}/services-counter/`,
    'Services Digital Asset Management': `${backendUrl}/content-management/`,
    'Management Paragraph': `${backendUrl}/brand-text-block/`,
    'Brand Management at Scale': `${backendUrl}/brand-management/`,
    'Global Cta': `${backendUrl}/global-cta/`,
    'Office Location': `${backendUrl}/office-locations/`,
    BlogItems: `${backendUrl}/blogs/`,
    'Our Clients': `${backendUrl}/our-clients/`,
  }
  //  console.log(result.data,'result')
  let { data } = result
  const results = []
  for (let i = 0; i < data.length; i++) {
    const apiUrl = `${apiMap[data[i].type]}${data[i].id}`
    try {
      const response = await axios.get(apiUrl)
      results.push(response.data)
    } catch (error) {
      console.error(
        `Error fetching data for type: ${data[i].type}, ID: ${data[i].id}`
      )
      // Handle the error as needed
    }
  }
  // console.log(results);
  return results
  // Now 'results' array contains the data for each object
  // console.log('Fetched data:', results)
}
export default getPageData
