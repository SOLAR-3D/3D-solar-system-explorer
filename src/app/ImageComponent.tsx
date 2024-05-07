import React from "react";
import { Box, ChakraProvider, Image } from "@chakra-ui/react";

interface ImageProps {
  content: string;
}

const ImageComponent: React.FC<ImageProps> = ({ content }) => {
  return (
    <ChakraProvider>
      <Box width="400px" height="300px" overflow="hidden">
        <Image
          src={content}
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
