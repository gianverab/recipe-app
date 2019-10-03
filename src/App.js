import React, { useEffect } from 'react';
import styled from 'styled-components';

const App = () => {
  const APP_ID = 'd0bc38cd';
  const APP_KEY = 'bd4801301fba39c2302d7eb6d3ca4413';

  const API = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getRecipes = async () => {
    const response = await fetch(API);
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <Wrapper>
      <h1>Hello Recipe App !!</h1>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`;
