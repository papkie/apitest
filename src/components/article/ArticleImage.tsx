import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-bottom: 3em;

  img {
    object-fit: cover;
    width: 100%;
  }
`;

const ArticleImage: React.FC<{ url: string; alt: string }> = ({ url, alt }) => {
  return (
    <Container>
      <img src={url} alt={alt} />
    </Container>
  );
};

export default ArticleImage;
