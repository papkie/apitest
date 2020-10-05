import React from "react";
import styled from "styled-components";
import { Article } from "./components/article/Article";
import Header from "./components/_partials/Header";

const MainContainer = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  align-items: center;
  margin-top: 10vh;
  flex-direction: column;
`;

export const App: React.FC = () => {
  return (
    <MainContainer>
      <Header />
      <Article />
    </MainContainer>
  );
};

export default App;
