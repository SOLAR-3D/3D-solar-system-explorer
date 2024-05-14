//struggling with imports

import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch
// Import addImage action from slice import { addImage } from "@app/store/carouselSlice"; import { ImageContent } from "@app/utils/types";

import { ImageContent } from "../app/utils/types";
import { addImage } from "../app/store/carouselSlice";

const selectImages = (state: { images: any }) => state.images;

interface ImageProps {
  content: ImageContent;
}

const ImageComponent: React.FC<ImageProps> = ({ content }) => {
  const dispatch = useDispatch();
  const images = useSelector(selectImages);

  console.log("Image content:", content);
  console.log("Images from Redux store:", images);

  const addImageToStore = (image: ImageContent) => {
    console.log("Adding image to store:", image);
    dispatch(addImage(image)); // Dispatch addImage action
  };

  return (
    <Box width="400px" height="300px" overflow="hidden">
      <Image
        src={content.imageUrl}
        alt="Carousel Image"
        width="100%"
        height="100%"
        objectFit="cover"
        cursor="pointer"
      />
    </Box>
  );
};

export default ImageComponent;
