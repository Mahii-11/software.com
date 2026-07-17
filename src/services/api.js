const BASE_URL = "https://backend.banglatechsolutionit.com/api";

// 🔹 Normalize data (main magic)
const normalizeData = (res) => {
  if (res?.data?.data) return res.data.data;
  if (res?.data) return res.data;
  return res;
};

// 🔹 Handle error nicely
const handleError = async (res) => {
  let message = "Something went wrong";

  try {
    const errorData = await res.json();
    message = errorData?.message || message;
  } catch (e) {
     console.error("Error parsing error response:", e);
  }

  throw new Error(message);
};

// 🔹 Main fetch function
export const fetchData = async (endpoint, options = {}) => {
  const { method = "GET", body, headers = {}, raw = false } = options;

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    await handleError(res);
  }

  const json = await res.json();

  return raw ? json : normalizeData(json);
};



export const getHeroSectionData = () => fetchData("/hero-section-index-api");
export const getWhoWeAre = () => fetchData("/who-we-index-api");
export const getSelectedData = () => fetchData("/our-works-index-api");
export const getOurTeam = () => fetchData("/our-team-index-api");
export const getOurExpertise = () => fetchData("/services-index-api");
export const getCapabilityData = () => fetchData("/capability-index-api");
export const getServiceData = () => fetchData("/service-data");
export const getFeatureData = () => fetchData("/feature-data");
export const getMedia = () => fetchData("/media-index-api");
export const getAllServices = () => fetchData("/all-service-data");
export const getAllProjects = () => fetchData("/all-project-data");
export const getLeadingCompanies = () => fetchData("/our-partner-data");
export const getSingleStory = (id) =>
  fetchData(`/single-story-data/${id}`);




//post request for contact form
export const submitContactForm = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/store-contact`,
      {
        method: "POST",
        body: formData, 
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};