import { Box, Button, ChakraProvider, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

type CarouselProps = {
  children: JSX.Element[];
};

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //Logic for the carousel buttons to switch between the different slides
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <ChakraProvider>
      {/* Carousel content */}
      <Flex direction="column" alignItems="center">
        <Box
          p="4"
          width="400px"
          height="300px"
          overflow="hidden"
          position="relative"
        >
          {" "}
          {children.map((child, index) => (
            <Box
              key={index}
              display={index === currentIndex ? "block" : "none"}
              width="100%"
              height="100%"
              position="absolute"
              top="0"
              left="0"
            >
              {child}
            </Box>
          ))}
        </Box>
        <Flex justifyContent="center" mt={4} position="relative">
          {" "}
          {/* Move between the slides with next and previous btns */}
          <Button onClick={goToPrevious} mr={2}>
            Previous
          </Button>
          <Button onClick={goToNext} ml={2}>
            Next
          </Button>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default Carousel;
