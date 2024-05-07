import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Carousel from "./Carousel";

const HomePage: React.FC = () => {
  return (
    <Flex direction="column" alignItems="center">
      <Carousel key="news-carousel" contentType="news"></Carousel>

      <Carousel key="image-carousel" contentType="image"></Carousel>
    </Flex>
  );
};

export default HomePage;
