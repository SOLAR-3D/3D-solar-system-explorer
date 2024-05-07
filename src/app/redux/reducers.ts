// reducers.ts
import { combineReducers } from "redux";
import { ImageContent } from "../utils/types";

// Define the initial state for your reducer
const initialState: ImageContent[] = [];

// Define the reducer function
const imageReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_IMAGE":
      return [...state, action.payload];
    default:
      return state;
  }
};

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  images: imageReducer,
});

export default rootReducer;
