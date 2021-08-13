import React from "react";
import PropTypes from "prop-types";

import { styled } from "config/css";

const Title = styled("h3", {
  margin: "3rem 0",
});

const Ol = styled("ol", {
  paddingLeft: "1rem",
});

const Li = styled("li", {
  listStylePosition: "inside",
  marginBottom: "2rem",
});

function Instructions(props) {
  const { steps = [] } = props;

  if (steps.length === 0) {
    return null;
  }

  return (
    <>
      <Title>How to prepare</Title>
      <Ol>
        {steps.map(({ display_text: displayText, id }) => (
          <Li key={id}>{displayText}</Li>
        ))}
      </Ol>
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
