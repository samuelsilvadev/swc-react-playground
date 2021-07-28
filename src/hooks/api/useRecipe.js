import { useEffect, useState } from "react";
import { fetchRecipeDetail } from "services/recipe";

function useRecipe(id) {
  const [recipe, setRecipe] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if (id) {
      setLoading(true);
      setRecipe(undefined);
      setError(undefined);

      fetchRecipeDetail(id)
        .then((loadedRecipe) => {
          setRecipe(loadedRecipe);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  return {
    loading,
    recipe,
    error,
  };
}

export default useRecipe;
