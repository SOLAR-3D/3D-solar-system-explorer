import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../src/app/redux/store"; // Import your Redux store
import CarouselComponent from "../src/app/Carousel";

// Utility function to render component with Redux store provider
function renderWithRedux(component: React.ReactElement) {
  return render(<Provider store={store}>{component}</Provider>);
}

// Test case
test("renders CarouselComponent without crashing", () => {
  renderWithRedux(<CarouselComponent contentType="news" />);
});
