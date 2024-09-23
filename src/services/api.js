import axios from "axios";

export const fetchArticles = async (search, currentPage) => {
  try {
    const result = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        client_id: "atZzbzuCiyXEn51AepXZzNVocLjc989iBNDnHuKbzFg",
        page: currentPage,
        query: search,
        orientation: "landscape",
      },
    });
    return result.data.results;
  } catch (error) {
    console.error("We can't get data from server");
  }
};
export default fetchArticles;
