import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { addImage } from "./redux/actions";
import { ImageContent } from "./utils/types";
import store from "./redux/store";

// Define a selector function to extract images from the Redux store
const selectImages = (state: { images: any }) => state.images;

interface ImageProps {
  content: ImageContent;
}

const ImageComponent: React.FC<ImageProps> = ({ content }) => {
  const dispatch = useDispatch();
  const images = useSelector(selectImages);

  console.log("Image content:", content); // Log the content of the image being clicked
  console.log("Images from Redux store:", images); // Log the images from the Redux store

  const addImageToStore = (image: ImageContent) => {
    console.log("Adding image to store:", image); // Log the image being added to the store
    dispatch(addImage(image));
  };
  console.log("---", content.imageUrl);
  return (
    <Provider store={store}>
      <Box width="400px" height="300px" overflow="hidden">
        <Image
          src={content.imageUrl}
          alt="Carousel Image"
          width="100%"
          height="100%"
          objectFit="cover"
          onClick={() => addImageToStore(content)} // Image click handler to add image to store
          cursor="pointer"
        />
        <Button onClick={() => addImageToStore(content)}>Add to Store</Button>{" "}
        {/* Button for adding image to the store */}
      </Box>
    </Provider>
  );
};

export default ImageComponent;
