import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { NewsContent } from "./utils/types";

interface NewsProps {
  content: NewsContent;
}

const NewsComponent: React.FC<NewsProps> = ({ content }) => {
  return (
    <Box>
      <Heading as="h1" size="xl" mb={4}>
        {content.h1}
      </Heading>
      <Heading as="h2" size="md" mb={2}>
        {content.h2}
      </Heading>
      <Text>{content.p}</Text>
    </Box>
  );
};

export default NewsComponent;
