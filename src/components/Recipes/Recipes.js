import React from "react";
import PropTypes from "prop-types";
import { styled } from "@stitches/react";
import { Link } from "react-router-dom";

import useRecipes from "hooks/api/useRecipes";

const Ul = styled("ul", {
  listStyle: "none",
});

const Li = styled("li", {
  "&:not(:last-child)": {
    marginBottom: "2rem",
  },
});

const LinkStyled = styled(Link, {
  color: "#000",
  textDecoration: "none",
});

function Recipes(props) {
  const { className } = props;
  const { recipes = [], loading, error } = useRecipes();

  if (loading) {
    return <p>Loading list of recipes...</p>;
  }

  if (error) {
    return <p>Something went wrong while loading recipes.</p>;
  }

  return (
    <Ul className={className}>
      {recipes.map(({ description, name, id }) => {
        return (
          <Li key={id}>
            <LinkStyled to={`/${id}`}>
              <article>
                <h2>{name}</h2>
                <p>{description}</p>
              </article>
            </LinkStyled>
          </Li>
        );
      })}
    </Ul>
  );
}

Recipes.propTypes = {
  className: PropTypes.string,
};

export default Recipes;
