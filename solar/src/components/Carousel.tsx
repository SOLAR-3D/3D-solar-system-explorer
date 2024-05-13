import React, { useState, useEffect } from "react";
import { Box, Flex, Button, Card } from "@chakra-ui/react";
import NewsComponent from "./carouselNews";
import ImageComponent from "./carouselImage";
import { fetchImageUrls } from "@/app/api/images/imagesApi"; // Import the fetchImageUrls function
import { NewsContent } from "@/app/utils/types"; // Import types for NewsContent and ImageContent
import { mockNewsData } from "./carouselMockData"; // Import mockNewsData
//type that takes news or images
interface CarouselProps {
  contentType: "news" | "image";
}

const CarouselComponent: React.FC<CarouselProps> = ({ contentType }) => {
  const [imageData, setImageData] = useState<string[]>([]); // State for image data
  const [newsData] = useState(mockNewsData); // State for news data
  const [currentIndex, setCurrentIndex] = useState(0);
  //buttons to navigate between the first and second page of the carousel. Each has 3 items
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 3));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(
        contentType === "news" ? newsData.length : imageData.length - 3,
        prevIndex + 3
      )
    );
  };
  //fetching the images from the unsplash API and distributing them in the carousel frames (see imageApi.ts file)
  useEffect(() => {
    if (contentType === "image") {
      fetchImageUrls()
        .then((data) => {
          setImageData(data);
        })
        .catch((error) => console.error("Error fetching image data:", error));
    }
  }, [contentType]);

  return (
    <Flex direction="column" alignItems="center">
      <Box p="4" width="100%" overflow="hidden">
        <Flex>
          {(contentType === "news" ? newsData : imageData)
            .slice(currentIndex, currentIndex + 3)
            .map((item: any, index: number) => (
              <Card key={index} flex="1 0 33.33%" mx="1" p="4">
                {contentType === "news" ? (
                  <NewsComponent content={item as NewsContent} />
                ) : (
                  <ImageComponent content={{ imageUrl: item as string }} />
                )}
              </Card>
            ))}
        </Flex>
      </Box>
      {contentType === "image" && (
        <Flex justifyContent="center" mt={4}>
          <Button onClick={goToPrevious} disabled={currentIndex === 0}>
            Previous
          </Button>
          <Button
            onClick={goToNext}
            ml={4}
            disabled={currentIndex >= imageData.length - 3}
          >
            Next
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default CarouselComponent;
