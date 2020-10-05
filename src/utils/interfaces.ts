// intentionally omitted not used properties
export interface ArticleResponse {
  heading: { elementType: "text"; value: string };
  author: { elementType: "text"; value: string };
  body: {
    values: string[];
    elementType: "formattedtext";
  };
  date: { elementType: "datetime"; value: string };
  mainImage: {
    value: {
      leadImage: {
        elementType: "image";
        url: string;
      };
      leadImageCaption: { elementType: "text"; value: string };
    };
  };
}
