import React from "react";
import { styled } from "@stitches/react";
import PropTypes from "prop-types";

const ButtonStyled = styled("button", {
  textTransform: "uppercase",
  background: "transparent",
  border: "0.1rem solid #000",
  cursor: "pointer",
  padding: "1rem 2rem",
});

function Button(props) {
  const { children, type = "button", className, ...remainingProps } = props;

  return (
    <ButtonStyled className={className} type={type} {...remainingProps}>
      {children}
    </ButtonStyled>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default Button;
