import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchRecipe from './components/SearchRecipe';
import Recipe from './components/Recipe';

const App = () => {
  const APP_ID = 'd0bc38cd';
  const APP_KEY = 'bd4801301fba39c2302d7eb6d3ca4413';

  const API = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <Wrapper>
      <h1>Hello Ripple App !!</h1>
      <SearchRecipe />
      <RecipeList>
        {recipes.map(recipe => (
          <Recipe key={recipe.recipe.label} title={recipe.recipe.label} image={recipe.recipe.image} />
        ))}
      </RecipeList>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  background: #fff;
  text-align: center;
`;

const RecipeList = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;
