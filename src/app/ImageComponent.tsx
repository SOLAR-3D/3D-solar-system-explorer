import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { ImageContent } from "./utils/types";
import { addImage } from "./redux/actions";

//imported from types.ts
interface ImageProps {
  content: ImageContent;
}

const ImageComponent: React.FC<ImageProps> = ({ content }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    // Dispatching an action to add the image to the Redux store
    dispatch(addImage(content));
  };

  return (
    <Box width="400px" height="300px" overflow="hidden">
      <Image
        src={content.imageUrl}
        alt="Carousel Image"
        width="100%"
        height="100%"
        objectFit="cover"
        onClick={handleClick}
        cursor="pointer"
      />
    </Box>
  );
};

export default ImageComponent;
