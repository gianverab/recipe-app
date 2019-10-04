import React from 'react';
import styled from 'styled-components';

const Recipe = ({ title, image }) => {
  return (
    <RecipeCard>
      <h1>{title}</h1>
      <img src={image} alt={title} />
    </RecipeCard>
  );
};

export default Recipe;

const RecipeCard = styled.div`
  background: #f3f3f3;
  border-radius: 4px;
`;
