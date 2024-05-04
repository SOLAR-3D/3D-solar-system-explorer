import { Box, ChakraProvider, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { fetchNewsData, NewsData } from "./utils";

const FetchNews = () => {
  //Stores the fetched news data (if available) or null initially.
  const [content, setContent] = useState<NewsData | null>(null);
  //Tracks whether the data is still being fetched or if it has finished loading
  const [isLoading, setIsLoading] = useState(true);

  //function imported from utils.ts to fetch news data
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchNewsData();
      setContent(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  //Chakra used to give different sizes to title subtitle and paragraph
  return (
    <ChakraProvider>
      <Box>
        <Heading as="h1" size="xl" mb={4}>
          {content?.h1}
        </Heading>
        <Heading as="h2" size="md" mb={2}>
          {content?.h2}
        </Heading>
        <Text>{content?.p}</Text>
      </Box>
    </ChakraProvider>
  );
};

export default FetchNews;
