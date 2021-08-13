import React from "react";
import PropTypes from "prop-types";

import { styled } from "config/css";

import Ingredient from "./Ingredient";

const Title = styled("h3", {
  margin: "3rem 0",
});

const Ul = styled("ul", {
  listStyle: "none",
});

const Li = styled("li", {
  listStylePosition: "inside",
  marginBottom: "2rem",
});

function Ingredients(props) {
  const { sections } = props;

  return (
    <>
      <Title>Ingredients</Title>
      <Ul>
        {sections.map(({ name, position, components }) => (
          <Li key={`${name}-${position}`}>
            <Ingredient name={name} components={components} />
          </Li>
        ))}
      </Ul>
    </>
  );
}

Ingredients.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      position: PropTypes.number,
      components: PropTypes.array,
    })
  ),
};

export default Ingredients;
