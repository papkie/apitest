import { ArticleResponse } from "./interfaces";
export const appBaseUrl = "https://content-eu-4.content-cms.com";

export const fetchArticles = async (): Promise<ArticleResponse> => {
  const response = await fetch(
    `${appBaseUrl}/api/859f2008-a40a-4b92-afd0-24bb44d10124/delivery/v1/content/db4930e9-7504-4d9d-ae6c-33facca754d1`
  );
  if (response.status >= 200 && response.status < 300) {
    const body = await response.json();
    if (!body.elements) {
      throw new Error(`Invalid response body`);
    }
    return body.elements;
  }
  throw new Error(`Response failed ${response.status}`);
};
