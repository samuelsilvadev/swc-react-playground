import React from "react";
import PropTypes from "prop-types";

function Ingredient(props) {
  const { name, components = [] } = props;

  if (components.length === 0) {
    return null;
  }

  return (
    <section>
      {name && <h3>{name}</h3>}
      <ol>
        {components.map(({ ingredient, id, measurements: [measurement] }) => (
          <li key={id}>
            {ingredient.name} - {measurement.quantity} {measurement.unit.name}
          </li>
        ))}
      </ol>
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
