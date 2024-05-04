"use client";

import { Box } from "@chakra-ui/react";
//importing the generic carousel component and the children components inside it
import Carousel from "./Carousel";
import FetchNews from "./FetchNews";
import ImageSlide from "./ImageSlide";
// we show the children components inside the carousel component
const HomePage: React.FC = () => {
  return (
    <Box>
      <Carousel>
        <FetchNews />
        <ImageSlide />
      </Carousel>
    </Box>
  );
};

export default HomePage;
