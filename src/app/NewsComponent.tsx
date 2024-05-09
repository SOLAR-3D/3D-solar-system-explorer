import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
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
      <Text p="4">{content.p}</Text>
      <Button onClick={() => addNewsToStore(content)}>Read more</Button>
    </Box>
  );
};

export default NewsComponent;

/* THIS IS HOW I THINK THE NEWS COMPONENT WILL BE LIKE AFTER CLICKING ON READ MORE AND CONNECTING IT TO THE OTHER 
COMPONENT THAT DISPLAYS THE FULL ARTICLE. 

This way, when the "Read more" button is clicked, the FullNewsComponent 
will receive the entire content object, containing all the information 
for the specific news article, allowing it to display the full news article.

import React, { useState } from "react";
import { Box, Heading, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addNews } from "./redux/actions";
import { NewsContent } from "./utils/types";
import FullNewsComponent from "./FullNewsComponent"; 

interface NewsProps {
  content: NewsContent;
}

const NewsComponent: React.FC<NewsProps> = ({ content }) => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const addNewsToStore = (news: NewsContent) => {
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
      {expanded ? (
        <FullNewsComponent content={content} />
      ) : (
        <Box>
          <Box p="4">{content.p.slice(0, 100)}...</Box>
          <Button onClick={toggleExpanded}>
            {expanded ? "Read less" : "Read more"}
          </Button>
        </Box>
      )}
      {!expanded && (
        <Button onClick={() => addNewsToStore(content)}>Add to Store</Button>
      )}
    </Box>
  );
};

export default NewsComponent;
*/
