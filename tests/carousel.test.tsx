import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../src/app/redux/store";
import ImageComponent from "../src/app/ImageComponent";
import { test } from "vitest";

test("renders ImageComponent without crashing", () => {
  render(
    <Provider store={store}>
      <ImageComponent content={{ imageUrl: "your-image-url" }} />
    </Provider>
  );
});
