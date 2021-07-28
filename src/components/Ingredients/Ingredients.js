import React from "react";
import PropTypes from "prop-types";

import Ingredient from "./Ingredient";

function Ingredients(props) {
  const { sections } = props;

  return (
    <ol>
      {sections.map(({ name, position, components }) => (
        <li key={`${name}-${position}`}>
          <Ingredient name={name} components={components} />
        </li>
      ))}
    </ol>
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
