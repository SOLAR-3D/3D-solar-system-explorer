"use client";

import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Flex } from "@chakra-ui/react";
import Carousel from "./Carousel";

const HomePage: React.FC = () => {
  return (
    <Provider store={store}>
      <Flex direction="column" alignItems="center">
        <Carousel key="news-carousel" contentType="news"></Carousel>
        <Carousel key="image-carousel" contentType="image"></Carousel>
      </Flex>
    </Provider>
  );
};

export default HomePage;
