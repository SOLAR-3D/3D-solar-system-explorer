# Explanation

1. Each news article needs to be managed individually, we therefore create a separate slice to manage such state.
2. Extend the functionality of NewsComponent to dispatch the full news article to the Redux store upon clicking "Read more".
3. Modify the NewsSection component to display the full news articles fetched from the Redux store.

# Problems

1. In the store.tsx, I have imported and added the contentReducer to the store configuration, but I am not using it anywhere in my components.
2. In the NewsComponent.tsx, we are dispatching actions from fullNewsSlice, but we are not using it in the store configuration.
3. In the NewsSection.tsx, we are selecting fullNews from the state using selectFullNews, which is defined in fullNewsSlice. Ensure that the selector function is correctly accessing fullNews from the state slice returned by fullNewsSlice.reducer.

## Long story short

1. Make sure all reducers are added to the store configuration in store.tsx.
2. Dispatch actions from the appropriate slices in your components.
3. Ensure selectors are correctly accessing state slices returned by reducers.
