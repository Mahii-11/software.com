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

// 🔹 Specific API functions (clean use)
export const getHeroSectionData = () => fetchData("/hero-section-data");
export const getWhoWeAre = () => fetchData("/identity-data");
export const getSelectedData = () => fetchData("/project-data");
export const getOurTeam = () => fetchData("/our-team-data");
export const getOurExpertise = () => fetchData("/expertise-data");

