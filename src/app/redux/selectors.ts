import { RootState } from "../utils/types";

// function to extract news from the redux store
export const selectNews = (state: RootState) => state.news;
