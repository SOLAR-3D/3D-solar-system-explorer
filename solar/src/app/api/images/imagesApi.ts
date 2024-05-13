import axios from "axios";

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
//base url + search query of planets
export const fetchImageUrls = async (): Promise<string[]> => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query: "planets",
        client_id: clientId,
      },
    });

    const imageUrls: string[] = response.data.results.map(
      (result: any) => result.urls.regular
    );

    return imageUrls;
  } catch (error) {
    console.error("Error fetching image URLs:", error);
    return [];
  }
};
