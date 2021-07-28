import { END_POINTS, buildUrl } from "config/api";
import { abstractedFetch } from "./fetch";

/**
 * @returns {Promise}
 */
async function fetchAllRecipes() {
  try {
    const response = await abstractedFetch(buildUrl(END_POINTS.EVERYTHING));
    const parsedResponse = await response.json();

    return parsedResponse;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }

    throw error;
  }
}

/**
 * @param {number} id
 * @returns {Promise}
 */
async function fetchRecipeDetail(id) {
  try {
    const url = new URL(buildUrl(END_POINTS.DETAILS));

    url.searchParams.append("id", id);

    const response = await abstractedFetch(url);
    const parsedResponse = await response.json();

    return parsedResponse;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }

    throw error;
  }
}

export { fetchAllRecipes, fetchRecipeDetail };
