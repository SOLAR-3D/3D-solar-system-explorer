//data structure of the news
export type NewsData = {
  h1: string;
  h2: string;
  p: string;
};
//fetching news data
export const fetchNewsData = async (): Promise<NewsData | null> => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1" //API url
    );
    const data = await response.json();
    return {
      h1: data.title,
      h2: "Subtitle",
      p: data.body,
    };
  } catch (error) {
    console.error("Error fetching news data:", error);
    return null;
  }
};

export const fetchImageData = async (): Promise<string | null> => {
  try {
    const response = await fetch("https://picsum.photos/200/300"); // endpoint to fetch images
    const data = await response.json();
    return data.imageUrl; // Assuming the API returns an object with a property 'imageUrl' containing the image URL
  } catch (error) {
    console.error("Error fetching image data:", error);
    return null;
  }
};
