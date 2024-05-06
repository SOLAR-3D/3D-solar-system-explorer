"use client";

import { Box } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Carousel from "./Carousel";
import FetchNews from "./FetchNews";
import ImageSlide from "./ImageSlide";

const HomePage: React.FC = () => {
  return (
    <Provider store={store}>
      {" "}
      {/* Here I am passing my components to the redux store */}
      <Box>
        <Carousel>
          {/* inside the carousel we can pass any component. Here I am passing 
                the fetch news and images */}

          <FetchNews />
          <ImageSlide />
        </Carousel>
      </Box>
    </Provider>
  );
};

export default HomePage;
