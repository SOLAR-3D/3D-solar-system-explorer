import { ImageContent } from "../utils/types";

export const addImage = (image: ImageContent) => ({
  type: "ADD_IMAGE",
  payload: image,
});
