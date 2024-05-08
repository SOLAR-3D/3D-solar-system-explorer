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

## Test

1. Using vitest and react testing library

2. This test checks whether the ImageComponent renders without crashing. It achieves this by rendering the ImageComponent within a Provider component provided by react-redux, with the Redux store passed as a prop. The ImageComponent is provided with a mock image URL through its content prop. If the component renders successfully without any errors, the test passes, indicating that the ImageComponent can be rendered properly within the testing environment.

## Other

1. Ignore the utils.ts file for now

2. All the types are grouped in the types.ts file

3. Redux implemented

## To do

1. Style better with Chakra UI

2. Merge with other people's code
