import axios from "axios";

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
// base url + search query of planets
export const fetchImageUrls = async (): Promise<string[]> => {
  try {
    const response = await axios.get(`https://api.unsplash.com/photos/random`, {
      params: {
        query: "planets",
        count: 51, // Fetch  51 random photos
        client_id: clientId,
      },
    });

    // Extract the URLs from each random photo in the response
    const imageUrls: string[] = response.data.map(
      (photo: any) => photo.urls.regular
    );

    return imageUrls;
  } catch (error) {
    console.error("Error fetching image URLs:", error);
    return [];
  }
};
