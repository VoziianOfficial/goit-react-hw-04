import axios from "axios";

export const fetchArticles = async () => {
  const { data } = await axios.get(
    "https://api.unsplash.com/photos/?client_id=atZzbzuCiyXEn51AepXZzNVocLjc989iBNDnHuKbzFg"
  );
  return data;
};
