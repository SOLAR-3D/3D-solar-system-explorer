import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { addNews } from "./redux/actions";
import { NewsContent } from "./utils/types";

// Define a selector function to extract news from the Redux store
const selectNews = (state: { news: any }) => state.news;

interface NewsProps {
  content: NewsContent;
}

const NewsComponent: React.FC<NewsProps> = ({ content }) => {
  const dispatch = useDispatch();
  const news = useSelector(selectNews);

  console.log("News content:", content); // Log the content prop
  console.log("News from Redux store:", news); // Log the news from the Redux store

  const addNewsToStore = (news: NewsContent) => {
    console.log("Adding news to store:", news); // Log the news being added to the store
    dispatch(addNews(news));
  };

  return (
    <Box>
      <Heading as="h1" size="xl" mb={4}>
        {content.h1}
      </Heading>
      <Heading as="h2" size="md" mb={2}>
        {content.h2}
      </Heading>
      <Text>{content.p}</Text>
      <button onClick={() => addNewsToStore(content)}>Add to News</button>
    </Box>
  );
};

export default NewsComponent;
