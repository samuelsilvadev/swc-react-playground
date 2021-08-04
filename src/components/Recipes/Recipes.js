import React, { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "@stitches/react";
import { Link } from "react-router-dom";

import Search from "components/Search";
import useRecipes from "hooks/api/useRecipes";

const Ul = styled("ul", {
  listStyle: "none",
});

const Li = styled("li", {
  border: "1px solid #000",
  padding: "1rem",

  "&:not(:last-child)": {
    marginBottom: "2rem",
  },
});

const LinkStyled = styled(Link, {
  color: "#000",
  textDecoration: "none",
});

const Description = styled("p", {
  marginTop: "1rem",
});

function Recipes(props) {
  const { className } = props;

  const { recipes = [], loading, error } = useRecipes();
  const [searchTerm, setSearchTerm] = useState();

  if (loading) {
    return <p className={className}>Loading list of recipes...</p>;
  }

  if (error) {
    return (
      <p className={className}>Something went wrong while loading recipes.</p>
    );
  }

  const filteredRecipes = searchTerm
    ? recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : recipes;

  return (
    <div className={className}>
      <Search onSearch={setSearchTerm} />
      {searchTerm && filteredRecipes.length === 0 ? (
        <p>No results found</p>
      ) : (
        <Ul>
          {filteredRecipes.map(({ description, name, id }) => {
            return (
              <Li key={id}>
                <LinkStyled to={`/${id}`}>
                  <article>
                    <h2>{name}</h2>
                    {description && <Description>{description}</Description>}
                  </article>
                </LinkStyled>
              </Li>
            );
          })}
        </Ul>
      )}
    </div>
  );
}

Recipes.propTypes = {
  className: PropTypes.string,
};

export default Recipes;
