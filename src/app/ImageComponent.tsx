import React from "react";
import { Box, ChakraProvider, Image } from "@chakra-ui/react";
import { ImageContent } from "./utils/types";

interface ImageProps {
  content: ImageContent;
}

const ImageComponent: React.FC<ImageProps> = ({ content }) => {
  return (
    <ChakraProvider>
      <Box width="400px" height="300px" overflow="hidden">
        <Image
          src={content.imageUrl}
          alt="Carousel Image"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>
    </ChakraProvider>
  );
};

export default ImageComponent;
