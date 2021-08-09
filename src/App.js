import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { styled, global } from "@stitches/react";

import Button from "components/Button";
import Recipes from "components/Recipes";
import Recipe from "components/Recipe";
import useIsMobile from "hooks/useIsMobile";

const createGlobalStyles = global({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  html: {
    fontSize: "62.5%",
  },
  body: {
    fontSize: "1.6rem",
  },
});

const Main = styled("main", {
  display: "flex",
  flexDirection: "column",
  padding: "2rem 3rem",

  "@media (min-width: 768px)": {
    alignItems: "flex-start",
    flexDirection: "row",
  },

  "@media (min-width: 1024px)": {
    padding: "2rem 5rem",
  },
});

const RecipesStyled = styled(Recipes, {
  flex: "0 1 auto",
  height: "auto",
  scrollbarWidth: "none",

  "@media (min-width: 768px)": {
    flexBasis: "calc(50% - 1.5rem)",
    marginRight: "1.5rem",
  },
});

const RecipeStyled = styled(Recipe, {
  // TODO: create variables to each value
  height: "calc(100vh - 2rem - 2.5rem - 4rem - 1rem)",
  overflow: "auto",
  scrollbarWidth: "none",
  width: "100%",

  "&::-webkit-scrollbar": {
    display: "none",
  },

  "@media (min-width: 768px)": {
    position: "sticky",
    top: "2rem",
    height: "calc(100vh - 4rem)",
    overscrollBehavior: "contain",
  },
});

const RecipeWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  flex: "0 1 auto",

  "@media (min-width: 768px)": {
    flexBasis: "calc(50% - 0.2rem - 1.5rem)",
    marginLeft: "1.5rem",
  },
});

const BackButton = styled(Button, {
  marginBottom: "1rem",
});

function RecipesWrapper(props) {
  const { hasBackButton } = props;

  const history = useHistory();

  const handleOnBackClick = () => {
    history.push("/");
  };

  return (
    <RecipeWrapper>
      {hasBackButton && (
        <BackButton
          data-cy="back-button"
          type="button"
          onClick={handleOnBackClick}
        >
          Back
        </BackButton>
      )}
      <RecipeStyled />
    </RecipeWrapper>
  );
}

RecipesWrapper.propTypes = {
  hasBackButton: PropTypes.bool,
};

function App() {
  createGlobalStyles();

  const isMobile = useIsMobile();

  if (typeof isMobile === "undefined") {
    return null;
  }

  const RoutesWrapper = isMobile ? Switch : Fragment;

  return (
    <BrowserRouter>
      <Main>
        <RoutesWrapper>
          <Route exact={isMobile} path="/">
            <RecipesStyled />
          </Route>
          <Route exact={isMobile} path="/:id">
            <RecipesWrapper hasBackButton={isMobile} />
          </Route>
        </RoutesWrapper>
      </Main>
    </BrowserRouter>
  );
}

export default App;
