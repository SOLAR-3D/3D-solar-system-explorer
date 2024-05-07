"use client";
import { Box, Flex, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { fetchNewsData, fetchImageData, NewsData } from "./utils";
import NewsComponent from "./NewsComponent";
import ImageComponent from "./ImageComponent";
//there is a type that contains news and images
type ContentType = "news" | "image";

const CarouselComponent: React.FC<{ contentType: ContentType }> = ({
  contentType,
}) => {
  const [content, setContent] = useState<(NewsData | string)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  //we can fetch news or images
  useEffect(() => {
    const fetchData = async () => {
      try {
        let fetchedData;
        if (contentType === "news") {
          fetchedData = await fetchNewsData();
        } else if (contentType === "image") {
          fetchedData = await fetchImageData();
        }
        if (Array.isArray(fetchedData)) {
          setContent(fetchedData.filter((item) => item));
        } else if (fetchedData) {
          setContent([fetchedData]);
        } else {
          setContent([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [contentType]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const goToNext = () => {
    // Determine the number of slides to display based on the content type
    const slidesToShow = contentType === "news" ? 3 : 1;
    setCurrentIndex((prevIndex) =>
      Math.min(content.length - slidesToShow, prevIndex + slidesToShow)
    );
  };
  //we display news or images based on the data we get
  return (
    <Flex direction="column" alignItems="center">
      <Box p="4" width="100%" overflow="hidden">
        <Flex>
          {content.slice(currentIndex, currentIndex + 3).map((item, index) => (
            <Box key={index} flex="1 0 33.33%" mx="1">
              {contentType === "news" && (
                <NewsComponent data={item as NewsData} />
              )}
              {contentType === "image" && (
                <ImageComponent imageUrl={item as string} />
              )}
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
