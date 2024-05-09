//struggling with imports

import React, { useState } from "react";
import { Box, Flex, Button, Card } from "@chakra-ui/react";
import { Provider, useSelector, useDispatch } from "react-redux";
import {
  addImage,
  addNews,
  selectImages,
  selectNews,
} from "@app/store/carouselSlice";
import store from "@app/store";
import NewsComponent from "./carouselNews";
import ImageComponent from "./carouselImage";
import { ImageContent, NewsContent } from "@app/utils/types";

interface CarouselProps {
  contentType: "news" | "image";
}

const CarouselComponent: React.FC<CarouselProps> = ({ contentType }) => {
  const images = useSelector(selectImages); // Access images from Redux store
  const news = useSelector(selectNews); // Access news from Redux store
  const dispatch = useDispatch(); // Get dispatch function

  const content: any = contentType === "news" ? news : images;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 3));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(content.length - 3, prevIndex + 3));
  };

  return (
    <Provider store={store}>
      <Flex direction="column" alignItems="center">
        <Box p="4" width="100%" overflow="hidden">
          <Flex>
            {content
              .slice(currentIndex, currentIndex + 3)
              .map((item: NewsContent | ImageContent, index: number) => (
                <Card key={index} flex="1 0 33.33%" mx="1" p="4">
                  {contentType === "news" && <NewsComponent content={item} />}
                  {contentType === "image" && (
                    <ImageComponent content={{ imageUrl: item.imageUrl }} />
                  )}
                </Card>
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
    </Provider>
  );
};

export default CarouselComponent;
