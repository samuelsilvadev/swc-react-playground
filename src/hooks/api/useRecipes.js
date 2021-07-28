import { useEffect, useState } from "react";
import { fetchAllRecipes } from "services/recipe";

function useRecipes() {
  const [recipes, setRecipes] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    setLoading(true);

    (async () => {
      try {
        const loadedRecipes = await fetchAllRecipes();

        if (Array.isArray(loadedRecipes.results)) {
          setRecipes(loadedRecipes.results);
        }
      } catch (error) {
        setError(error);
      } finally {
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
