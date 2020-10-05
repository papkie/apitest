import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: rgba(255, 0, 0, 0.5);
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 4em;
`;

const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return <Container>Error occured: {message}</Container>;
};

export default ErrorMessage;
