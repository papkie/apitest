import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
  font-style: italic;
  font-weight: 100;
`;

const ArticleMetadata: React.FC<{ author: string; date: string }> = ({
  author,
  date,
}) => {
  const formattedDate = new Date(date).toDateString();
  return (
    <Container>
      {author} | {formattedDate}
    </Container>
  );
};

export default ArticleMetadata;
