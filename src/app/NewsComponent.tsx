import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./redux/store"; // Import your Redux store
import NewsComponent from "../src/app/NewsComponent";

test("renders NewsComponent without crashing", () => {
  const content = {
    h1: "News Title",
    h2: "News Subtitle",
    p: "News Content",
  };

  const { getByText } = render(
    <Provider store={store}>
      <NewsComponent content={content} />
    </Provider>
  );

  // Verify that the news content is rendered
  expect(getByText("News Title")).toBeInTheDocument();
  expect(getByText("News Subtitle")).toBeInTheDocument();
  expect(getByText("News Content")).toBeInTheDocument();
});

test("dispatches action to add news when 'Add to News' button is clicked", () => {
  const content = {
    h1: "News Title",
    h2: "News Subtitle",
    p: "News Content",
  };

  const { getByText } = render(
    <Provider store={store}>
      <NewsComponent content={content} />
    </Provider>
  );

  // Click the 'Add to News' button
  fireEvent.click(getByText("Add to News"));

  // Verify that the action to add news is dispatched
  expect(store.dispatch).toHaveBeenCalledWith(addNews(content));
});
