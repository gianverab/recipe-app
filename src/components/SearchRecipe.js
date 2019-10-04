import React from 'react';
import styled from 'styled-components';

const SearchRecipe = () => {
  return (
    <SearchForm>
      <input type="text" />
      <button type="submit">Search</button>
    </SearchForm>
  );
};

export default SearchRecipe;

const SearchForm = styled.form`
  background-color: #f6f6f6;
  width: 360px;
  margin: 0 auto 32px;
  padding: 10px;
`;
