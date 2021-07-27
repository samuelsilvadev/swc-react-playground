import { useEffect, useState } from "react";
import { fetchAllRecipes } from "services/recipe";

function useRecipes() {
  const [recipes, setRecipes] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    setLoading(true);

    (async () => {
      const loadedRecipes = await fetchAllRecipes();

      if ("error" in loadedRecipes) {
        setError(loadedRecipes.error);
        setLoading(false);

        return;
      }

      if (Array.isArray(loadedRecipes.results)) {
        setRecipes(loadedRecipes.results);
        setLoading(false);
      }
    })();
  }, []);

  return {
    loading,
    recipes,
    error,
  };
}

export default useRecipes;
