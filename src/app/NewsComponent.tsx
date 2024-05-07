import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

interface NewsProps {
  content: {
    h1: string;
    h2: string;
    p: string;
  };
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
