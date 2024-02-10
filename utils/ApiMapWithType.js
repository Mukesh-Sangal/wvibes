import axios from 'axios'
async function getPageData(apiPageUrl) {
  const result = await axios.get(apiPageUrl)
  const apiMap = {
    Banner: `https://dev-growwives.pantheonsite.io/innerbanner/`,
    'Box Container': `https://dev-growwives.pantheonsite.io/what-we-do/`,
    'Title With Desc Main': `https://dev-growwives.pantheonsite.io/title-with-desc/`,
    Improve: `https://dev-growwives.pantheonsite.io/improving/`,
    'Lets Build head subhead img': `https://dev-growwives.pantheonsite.io/lets-build/`,
    'Home Portfolio': `https://dev-growwives.pantheonsite.io/home-page-section-1/`,
    'Home Page Banner': `https://dev-growwives.pantheonsite.io/home-banner/`,
    'Drupal  Power  House  Customizations': `https://dev-growwives.pantheonsite.io/home-page-section-2/`,
    'Home Page We Help Agencies': `https://dev-growwives.pantheonsite.io/help-agencies section-4/`,
    'Title Heading With Cta': `https://dev-growwives.pantheonsite.io/cta-section/`,
    'Home Cta Services': `https://dev-growwives.pantheonsite.io/home-services/`,
    'Cta Heading Link Image': `https://dev-growwives.pantheonsite.io/cta-with-image/`,
    faq: `https://dev-growwives.pantheonsite.io/faq-questions-ans/`,
    'About us First Section': `https://dev-growwives.pantheonsite.io/about-first/`,
    'Our Mission': `https://dev-growwives.pantheonsite.io/our-mission/`,
    'About Digital Experiences': `https://dev-growwives.pantheonsite.io/about-digital-experiences/`,
    'Our Team': `https://dev-growwives.pantheonsite.io/our-team/`,
    'About lando today': `https://dev-growwives.pantheonsite.io/about-start-with-lando/`,
    'Technologies We Serve': `https://dev-growwives.pantheonsite.io/tech-we-serve/`,
    'Services Banner': `https://dev-growwives.pantheonsite.io/services-banner/`,
    'Services Counter Main': `https://dev-growwives.pantheonsite.io/services-counter/`,
    'Services Digital Asset Management': `https://dev-growwives.pantheonsite.io/content-management/`,
    'Management Paragraph': `https://dev-growwives.pantheonsite.io/brand-text-block/`,
    'Brand Management at Scale': `https://dev-growwives.pantheonsite.io/brand-management/`,
    'Global Cta': `https://dev-growwives.pantheonsite.io/global-cta/`,
    'Office Location': `https://dev-growwives.pantheonsite.io/office-locations/`,
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
