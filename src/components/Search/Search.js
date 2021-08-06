import React, { useRef } from "react";
import PropTypes from "prop-types";
import { styled } from "@stitches/react";

const Form = styled("form", {
  display: "flex",
  height: "4rem",
  marginBottom: "1rem",
  width: "100%",
});

const Input = styled("input", {
  border: "0.1rem solid #000",
  flexGrow: 1,
  marginRight: "1rem",
  padding: "0 2rem",
});

const Button = styled("button", {
  background: "transparent",
  border: "0.1rem solid #000",
  cursor: "pointer",
  padding: "0 2rem",
});

function Search(props) {
  const { onSearch } = props;

  const inputRef = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();

    onSearch?.(inputRef.current.value);
  };

  return (
    <Form data-cy="search-form" onSubmit={handleOnSubmit}>
      <Input
        data-cy="search-input"
        type="search"
        aria-label="Search for a recipe"
        placeholder="Search for a recipe"
        ref={inputRef}
      />
      <Button data-cy="search-button" type="submit">
        Search
      </Button>
    </Form>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func,
};

export default Search;
