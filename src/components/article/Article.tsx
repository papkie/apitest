import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { appBaseUrl, fetchArticles } from "../../utils/apiClient";
import { ArticleResponse } from "../../utils/interfaces";
import ErrorMessage from "../_partials/ErrorMessage";
import { ArticleBody } from "./ArticleBody";
import ArticleImage from "./ArticleImage";
import ArticleMetadata from "./ArticleMetadata";
import ArticleTitle from "./ArticleTitle";

const Container = styled.div`
  width: 300px;

  @media (min-width: 600px) {
    width: 550px;
  }
`;

export const Article: React.FC = () => {
  const [article, setArticle] = useState<ArticleResponse | null>(null);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    fetchArticles()
      .then((value) => {
        console.log(value);
        setArticle(value);
      })
      .catch((error: Error) => {
        setError(error.message);
        setArticle(null);
      });
  }, []);

  const imageUrl =
    article && new URL(article.mainImage.value.leadImage.url, appBaseUrl);

  return (
    <Container>
      {error && <ErrorMessage message={error} />}
      {article && (
        <>
          {imageUrl && (
            <ArticleImage
              url={imageUrl.href}
              alt={article.mainImage.value.leadImageCaption.value}
            />
          )}
          <ArticleTitle>{article.heading.value}</ArticleTitle>
          <ArticleMetadata
            author={article.author.value}
            date={article.date.value}
          />
          <ArticleBody
            dangerouslySetInnerHTML={{
              __html: article.body.values.join("<br />"),
            }}
          />
        </>
      )}
    </Container>
  );
};
