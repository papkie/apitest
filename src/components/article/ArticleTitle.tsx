import React from "react";
import styled from "styled-components";

const Container = styled.header`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 0.5em;
  text-align: center;
`;

const ArticleTitle: React.FC = (props) => {
  return <Container>{props.children}</Container>;
};

export default ArticleTitle;
