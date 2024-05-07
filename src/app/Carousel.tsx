"use client";

import React, { useState } from "react";
import { Box, Flex, Button } from "@chakra-ui/react";
import NewsComponent from "./NewsComponent";
import ImageComponent from "./ImageComponent";
import { mockNewsData, mockImageData } from "./mockData";

interface CarouselProps {
  contentType: "news" | "image";
}

const CarouselComponent: React.FC<CarouselProps> = ({ contentType }) => {
  const [content, setContent] = useState<any[]>(() => {
    if (contentType === "news") {
      return mockNewsData;
    } else if (contentType === "image") {
      return mockImageData;
    } else {
      return [];
    }
  });
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const goToNext = () => {
    const slidesToShow = contentType === "news" ? 3 : 1;
    setCurrentIndex((prevIndex) =>
      Math.min(content.length - slidesToShow, prevIndex + slidesToShow)
    );
  };

  return (
    <Flex direction="column" alignItems="center">
      <Box p="4" width="100%" overflow="hidden">
        <Flex>
          {content.slice(currentIndex, currentIndex + 3).map((item, index) => (
            <Box key={index} flex="1 0 33.33%" mx="1">
              {contentType === "news" && <NewsComponent content={item} />}
              {contentType === "image" && <ImageComponent content={item} />}
            </Box>
          ))}
        </Flex>
      </Box>
      <Flex justifyContent="center" mt={4}>
        <Button onClick={goToPrevious} disabled={currentIndex === 0}>
          Previous
        </Button>
        <Button
          onClick={goToNext}
          ml={4}
          disabled={currentIndex >= content.length - 3}
        >
          Next
        </Button>
      </Flex>
    </Flex>
  );
};

export default CarouselComponent;
