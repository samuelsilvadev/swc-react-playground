const BASE_URL = process.env.BASE_URL;
const API_KEY = process.env.API_KEY;
const API_HOST = process.env.API_HOST;

const END_POINTS = {
  EVERYTHING: "/list",
};

/**
 * @param {string} endpoint
 * @returns {string}
 */
function buildUrl(endpoint) {
  return `${BASE_URL}${endpoint}?apiKey=${API_KEY}`;
}

export { BASE_URL, END_POINTS, API_KEY, API_HOST, buildUrl };
