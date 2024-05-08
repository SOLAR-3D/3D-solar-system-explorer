import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addNews } from "./redux/actions";
import { NewsContent } from "./utils/types";

interface NewsProps {
  content: NewsContent;
}

const NewsComponent: React.FC<NewsProps> = ({ content }) => {
  const dispatch = useDispatch(); // Initialize dispatch
  const addNewsToStore = (news: NewsContent) => dispatch(addNews(news)); // Create a function to dispatch addNews action

  return (
    <Box>
      <Heading as="h1" size="xl" mb={4}>
        {content.h1}
      </Heading>
      <Heading as="h2" size="md" mb={2}>
        {content.h2}
      </Heading>
      <Text>{content.p}</Text>
      <button onClick={() => addNewsToStore(content)}>Add to News</button>{" "}
      {/* Example button to add news to store */}
    </Box>
  );
};

export default NewsComponent;
