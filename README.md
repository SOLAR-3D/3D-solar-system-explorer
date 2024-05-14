# 3D-solar-system-explorer

Teach kids and grown ups about the solar system in a more immersive way

## Carousel.tsx

1. Functional component (React.FC<CarouselProps>) receiving props of type CarouselProps.

2. Utilizes useState to manage the current content index and Provider from react-redux to provide the Redux store. Implements goToPrevious and goToNext functions for navigation. Renders JSX markup that maps over the content array, displaying either NewsComponent or ImageComponent based on the contentType.

3. Displays a carousel of news or images, allowing navigation between items and rendering appropriate components based on the content type.

## ImageComponent.tsx

1. Functional component (React.FC<ImageProps>) that receives props of type ImageContent.

2. Uses useSelector to access image state from the Redux store. Defines addImageToStore function to dispatch addImage action with the content. Returns JSX with an image and a button.

## NewsComponent.tsx

1. Functional component (React.FC<NewsProps>) receiving props of type NewsContent.

2. Utilizes useSelector to access news state from the Redux store. Implements addNewsToStore function to dispatch addNews action with the content. Renders JSX with headings (<Heading>), text (<Text>), and a button that triggers addNewsToStore on click.

3. Redux implemented

## To do

1. Combine with news component
