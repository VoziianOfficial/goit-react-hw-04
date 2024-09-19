import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function fetchArticles() {
      const response = await axios.get(
        "https://hn.algolia.com/api/v1/search?query=react"
      );

      setArticles(response.data.hits);
      console.log(response);
    }

    fetchArticles();
  }, []);

  return (
    <div>
      <SearchBar />
      <ImageGallery />
      <ImageCard />
      <imageModal />
      <Loader />
      <LoadMoreBtn />
      <ImageModal />
      <ErrorMessage />
      <h1>Latest articles</h1>
    </div>
  );
};

export default App;
