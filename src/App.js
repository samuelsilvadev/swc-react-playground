import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

import Button from "components/Button";
import Recipes from "components/Recipes";
import Recipe from "components/Recipe";
import useIsMobile from "hooks/useIsMobile";
import { styled, global } from "config/css";

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
  $$gap: "1.5rem",
  $$containerBlockPadding: "2rem",

  display: "flex",
  flexDirection: "column",
  padding: "$$containerBlockPadding 3rem",

  "@sm": {
    alignItems: "flex-start",
    flexDirection: "row",
  },

  "@md": {
    padding: "$$containerBlockPadding 5rem",
  },
});

const RecipesStyled = styled(Recipes, {
  flex: "0 1 auto",
  height: "auto",
  scrollbarWidth: "none",

  "@sm": {
    flexBasis: "calc(50% - $$gap)",
    marginRight: "$$gap",
  },
});

const RecipeWrapper = styled("div", {
  $$backButtonComputedHeight: "3.7rem",
  $$backButtonMarginBottom: "1rem",

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  flex: "0 1 auto",

  "@sm": {
    flexBasis: "calc(50% - 0.2rem - $$gap)",
    marginLeft: "$$gap",
  },
});

const RecipeStyled = styled(Recipe, {
  height:
    "calc(100vh - ($$containerBlockPadding * 2) - $$backButtonComputedHeight - $$backButtonMarginBottom)",
  overflow: "auto",
  scrollbarWidth: "none",
  width: "100%",

  "&::-webkit-scrollbar": {
    display: "none",
  },

  "@sm": {
    position: "sticky",
    top: "2rem",
    height: "calc(100vh - ($$containerBlockPadding * 2))",
    overscrollBehavior: "contain",
  },
});

const BackButton = styled(Button, {
  marginBottom: "$$backButtonMarginBottom",
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
