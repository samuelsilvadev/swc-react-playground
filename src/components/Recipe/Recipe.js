import React from "react";
import PropTypes from "prop-types";
import { styled } from "@stitches/react";
import { useParams } from "react-router-dom";

import Instructions from "components/Instructions";
import Ingredients from "components/Ingredients";
import useRecipe from "hooks/api/useRecipe";

const Article = styled("article", {
  border: "1px solid #000",
  padding: "1rem",
});

const Img = styled("img", {
  height: "40vh",
  maxWidth: "100%",
  objectFit: "cover",
  marginBottom: "1rem",
  width: "100%",
});

const Title = styled("h2", {
  marginBottom: "1rem",
});

const Description = styled("p", {
  marginBottom: "1rem",
});

const PreparationTime = styled("p", {
  fontWeight: "bold",
  marginBottom: "0.5rem",
});

const Produces = styled("p", {
  fontStyle: "italic",
  marginBottom: "1rem",
});

const HowToWrapper = styled("div", {
  // padding: "0 4rem",
});

function Recipe(props) {
  const { className } = props;
  const { id } = useParams();

  const { recipe, loading, error } = useRecipe(id);

  if (loading) {
    return <p className={className}>Loading recipe details...</p>;
  }

  if (error) {
    return (
      <p className={className}>
        Something went wrong while loading the recipe details
      </p>
    );
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
    <Article className={className}>
      <Img src={thumbnailUrl} alt={name} />
      <Title>{name}</Title>
      <Description>{description}</Description>
      <PreparationTime>Preparation time: {displayTier}</PreparationTime>
      <Produces>{yields}</Produces>
      <HowToWrapper>
        <Ingredients sections={sections} />
        <Instructions steps={instructions} />
      </HowToWrapper>
    </Article>
  );
}

Recipe.propTypes = {
  className: PropTypes.string,
};

export default Recipe;
