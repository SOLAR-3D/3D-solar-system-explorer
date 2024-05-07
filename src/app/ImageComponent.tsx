import { Box, ChakraProvider, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { fetchImageData } from "./utils";
interface ImageComponentProps {
  imageUrl: string;
}
const ImageComponent: React.FC<ImageComponentProps> = ({ imageUrl }) => {
  // hardcoded url just to test the design
  const placeholderImageURL = "https://picsum.photos/200";
  // the styling ensures the image has a fixed size and fits into the div
  return (
    <ChakraProvider>
      <Box width="400px" height="300px" overflow="hidden">
        <Image
          src={imageUrl || placeholderImageURL}
          alt="Carousel Image"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>
    </ChakraProvider>
  );
};

interface ImageComponentProps {
  imageUrl: string;
}

export default ImageComponent;
