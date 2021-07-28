import React from "react";
import PropTypes from "prop-types";

function Instructions(props) {
  const { steps = [] } = props;

  if (steps.length === 0) {
    return null;
  }

  return (
    <>
      <h3>How to prepare</h3>
      <ol>
        {steps.map(({ display_text: displayText, id }) => (
          <li key={id}>{displayText}</li>
        ))}
      </ol>
    </>
  );
}

Instructions.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      display_text: PropTypes.string,
    })
  ),
};

export default Instructions;
