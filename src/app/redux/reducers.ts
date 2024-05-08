import { combineReducers } from "redux";
import { ImageContent, NewsContent } from "../utils/types";

// Define the initial state the reducers
const initialImageState: ImageContent[] = [];
const initialNewsState: NewsContent[] = [];

// Define the reducer functions
const imageReducer = (state = initialImageState, action: any) => {
  switch (action.type) {
    case "ADD_IMAGE":
      return [...state, action.payload];
    default:
      return state;
  }
};

const newsReducer = (state = initialNewsState, action: any) => {
  switch (action.type) {
    case "ADD_NEWS":
      return [...state, action.payload];
    default:
      return state;
  }
};

// Combine reducers
const rootReducer = combineReducers({
  images: imageReducer,
  news: newsReducer,
});

export default rootReducer;
