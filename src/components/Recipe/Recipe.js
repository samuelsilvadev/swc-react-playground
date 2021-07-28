import React from "react";
import PropTypes from "prop-types";
import { styled } from "@stitches/react";
import { useParams } from "react-router-dom";

import Instructions from "components/Instructions";
import Ingredients from "components/Ingredients";
import useRecipe from "hooks/api/useRecipe";

const Img = styled("img", {
  height: "50vh",
});

const HowToWrapper = styled("div", {
  padding: "0 4rem",
});

function Recipe(props) {
  const { className } = props;
  const { id } = useParams();

  const { recipe, loading, error } = useRecipe(id);

  if (loading) {
    return <p>Loading recipe details...</p>;
  }

  if (error) {
    return <p>Something went wrong while loading the recipe details</p>;
  }

  if (!recipe) {
    return null;
  }

  const {
    name,
    description,
    thumbnail_url: thumbnailUrl,
    total_time_tier: totalTimeTier,
    sections,
    instructions,
    yields,
  } = recipe;
  const { display_tier: displayTier } = totalTimeTier ?? {};

  return (
    <article className={className}>
      <Img src={thumbnailUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Preparation time: {displayTier}</p>
      <p>{yields}</p>
      <HowToWrapper>
        <Ingredients sections={sections} />
        <Instructions steps={instructions} />
      </HowToWrapper>
    </article>
  );
}

Recipe.propTypes = {
  className: PropTypes.string,
};

export default Recipe;
