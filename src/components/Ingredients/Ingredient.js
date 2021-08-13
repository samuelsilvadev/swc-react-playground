import React from "react";
import PropTypes from "prop-types";

import { styled } from "config/css";

const Title = styled("h4", {
  marginBottom: "1rem",
});

const Ol = styled("ol", {
  paddingLeft: "1rem",
});

function Ingredient(props) {
  const { name, components = [] } = props;

  if (components.length === 0) {
    return null;
  }

  return (
    <section>
      {name && <Title>{name}</Title>}
      <Ol>
        {components.map(({ ingredient, id, measurements: [measurement] }) => (
          <li key={id}>
            {ingredient.name} - {measurement.quantity} {measurement.unit.name}
          </li>
        ))}
      </Ol>
    </section>
  );
}

Ingredient.propTypes = {
  name: PropTypes.string,
  components: PropTypes.arrayOf(
    PropTypes.shape({
      ingredient: PropTypes.shape({
        name: PropTypes.string,
      }),
      measurements: PropTypes.arrayOf(
        PropTypes.shape({
          quantity: PropTypes.string,
          unit: PropTypes.shape({
            name: PropTypes.string,
          }),
        })
      ),
    })
  ),
};

export default Ingredient;
