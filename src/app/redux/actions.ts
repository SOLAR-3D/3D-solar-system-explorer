import { ImageContent, NewsContent } from "../utils/types";

export const addImage = (image: ImageContent) => ({
  type: "ADD_IMAGE",
  payload: image,
});

export const addNews = (news: NewsContent) => ({
  type: "ADD_NEWS",
  payload: news,
});
