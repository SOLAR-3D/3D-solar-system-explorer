import { Box, ChakraProvider, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { fetchImageData } from "./utils";

const ImageSlide: React.FC = () => {
  //Stores the fetched image data (if available) or null initially.
  const [imageURL, setImageURL] = useState<string | null>(null);
  //hardcoded url just to test the design
  const placeholderImageURL = "https://picsum.photos/200";
  //function from utils.ts to fetch the image data from the API
  useEffect(() => {
    const fetchData = async () => {
      const url = await fetchImageData();
      setImageURL(url);
    };

    fetchData();
  }, []);
  //the styling ensures the image has a fixed says and fits into the div
  return (
    <ChakraProvider>
      <Box width="400px" height="300px" overflow="hidden">
        <Image
          src={imageURL || placeholderImageURL}
          alt="Carousel Image"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>
    </ChakraProvider>
  );
};

export default ImageSlide;
