import { API_HOST, API_KEY } from "config/api";

/**
 * @param {string} url
 * @returns {Promise}
 */
function abstractedFetch(url) {
  return fetch(url, {
    headers: {
      "x-rapidapi-key": API_KEY,
      "x-rapidapi-host": API_HOST,
    },
  });
}

export { abstractedFetch };
