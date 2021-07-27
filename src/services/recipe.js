import { END_POINTS, buildUrl } from "config/api";
import { abstractedFetch } from "./fetch";

async function fetchAllRecipes() {
  try {
    const response = await abstractedFetch(buildUrl(END_POINTS.EVERYTHING));
    const parsedResponse = await response.json();

    return parsedResponse;
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.error(error);
    }

    return { error };
  }
}

export { fetchAllRecipes };
