import { rest } from "msw";

import { END_POINTS, buildUrl } from "config/api";

import { SMALL_RECIPES, FULL_RECIPES } from "./__fixtures__/recipes";

const fetchAllRecipesHandler = rest.get(
  buildUrl(END_POINTS.EVERYTHING),
  (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: Object.values(SMALL_RECIPES),
      })
    );
  }
);

const fetchRecipeHandler = rest.get(
  buildUrl(END_POINTS.DETAILS),
  (req, res, ctx) => {
    const id = req.url.searchParams.get("id");

    return res(ctx.status(200), ctx.json(FULL_RECIPES[id]));
  }
);

export const handlers = [fetchAllRecipesHandler, fetchRecipeHandler];
