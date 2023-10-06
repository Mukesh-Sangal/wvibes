import axios from 'axios'
async function getPageData(apiPageUrl) {
  const result = await axios.get(apiPageUrl)
  const apiMap = {
    Banner: `http://free.lndo.site:8000/innerbanner/`,
    'Box Container': `http://free.lndo.site:8000/what-we-do/`,
    'Title With Desc Main': `http://free.lndo.site:8000/title-with-desc/`,
    'Lets Build head subhead img': `http://free.lndo.site:8000/lets-build/`,
    'Home Portfolio': `http://free.lndo.site:8000/home-page-section-1/`,
    'Home Page Banner': `http://free.lndo.site:8000/home-banner/`,
    'Drupal  Power  House  Customizations': `http://free.lndo.site:8000/home-page-section-2/`,
    'Home Page We Help Agencies': `http://free.lndo.site:8000/help-agencies section-4/`,
    'Title Heading With Cta': `http://free.lndo.site:8000/cta-section/`,
    'Home Cta Services': `http://free.lndo.site:8000/home-services/`,
    'Cta Heading Link Image': `http://free.lndo.site:8000/cta-with-image/`,
    faq: `http://free.lndo.site:8000/faq-questions-ans/`,
    'About us First Section': `http://free.lndo.site:8000/about-first/`,
    'Our Mission': `http://free.lndo.site:8000/our-mission/`,
    'About Digital Experiences': `http://free.lndo.site:8000/about-digital-experiences/`,
    'Our Team': `http://free.lndo.site:8000/our-team/`,
    'About lando today': `http://free.lndo.site:8000/about-start-with-lando/`,
    'Technologies We Serve': `http://free.lndo.site:8000/tech-we-serve/`,
  }
  // console.log(result.data,'result')
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
  return results
  // Now 'results' array contains the data for each object
  // console.log('Fetched data:', results)
}
export default getPageData;
