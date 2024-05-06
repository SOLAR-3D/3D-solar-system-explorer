import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { setCurrentIndex } from "./redux/carouselSlice";

type CarouselProps = {
  children: JSX.Element[];
};

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const dispatch = useDispatch();
  const currentIndex = useSelector(
    (state: RootState) => state.carousel.currentIndex
  );

  const goToPrevious = () => {
    dispatch(
      setCurrentIndex(
        currentIndex === 0 ? children.length - 1 : currentIndex - 1
      )
    );
  };

  const goToNext = () => {
    dispatch(
      setCurrentIndex(
        currentIndex === children.length - 1 ? 0 : currentIndex + 1
      )
    );
  };

  return (
    <Flex direction="column" alignItems="center">
      <Box
        p="4"
        width="400px"
        height="300px"
        overflow="hidden"
        position="relative"
      >
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
        <Button onClick={goToPrevious} mr={2}>
          Previous
        </Button>
        <Button onClick={goToNext} ml={2}>
          Next
        </Button>
      </Flex>
    </Flex>
  );
};

export default Carousel;
