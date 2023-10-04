import axios from "axios";
const backendUrl = "http://free.lndo.site";

type ApiResponse = {
  type: string;
  id: string;
  // Define other properties as needed
};

type ApiMap = {
  [key: string]: string;
};

async function getPageData(apiPageUrl: string): Promise<any[]> {
  const result = await axios.get(apiPageUrl);

  const apiMap: ApiMap = {
    Banner: `${backendUrl}/innerbanner/`,
    "Box Container": `${backendUrl}/what-we-do/`,
    "Title With Desc Main": `${backendUrl}/title-with-desc/`,
    "Lets Build head subhead img": `${backendUrl}/lets-build/`,
    "Home Portfolio": `${backendUrl}/home-page-section-1/`,
    "Home Page Banner": `${backendUrl}/home-banner/`,
    "Drupal  Power  House  Customizations": `${backendUrl}/home-page-section-2/`,
    "Home Page We Help Agencies": `${backendUrl}/help-agencies section-4/`,
    "Title Heading With Cta": `${backendUrl}/cta-section/`,
    "Home Cta Services": `${backendUrl}/home-services/`,
    "Cta Heading Link Image": `${backendUrl}/cta-with-image/`,
    faq: `${backendUrl}/faq-questions-ans/`,
    "About us First Section": `${backendUrl}/about-first/`,
    "Our Mission": `${backendUrl}/our-mission/`,
    "About Digital Experiences": `${backendUrl}/about-digital-experiences/`,
    "Our Team": `${backendUrl}/our-team/`,
    "About lando today": `${backendUrl}/about-start-with-lando/`,
  };

  let { data } = result;
  const results: any[] = [];

  for (let i = 0; i < data.length; i++) {
    const apiUrl = `${apiMap[data[i].type]}${data[i].id}`;
    try {
      const response = await axios.get(apiUrl);
      results.push(response.data);
    } catch (error) {
      console.error(
        `Error fetching data for type: ${data[i].type}, ID: ${data[i].id}`
      );
      // Handle the error as needed
    }
  }

  return results;
}

export default getPageData;
