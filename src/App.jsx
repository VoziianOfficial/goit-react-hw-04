import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import fetchArticles from "./services/api";
import toast, { Toaster } from "react-hot-toast"; // Импортируем Toaster

// Устанавливаем основной элемент приложения для модального окна
Modal.setAppElement("#root");

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // Инициализация состояния ошибки
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (query === "") return;

    setIsLoading(true);
    setError(null); // Сброс ошибки перед новым запросом

    fetchArticles(query, currentPage)
      .then((newImages) => {
        if (newImages.length === 0) {
          setError("No images found. Try another search term."); // Обработка ситуации, когда нет изображений
        } else {
          setImages((prevImages) => [...prevImages, ...newImages]);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Something went wrong. Please try again."); // Устанавливаем сообщение об ошибке
        setIsLoading(false);
      });
  }, [query, currentPage]);

  const handleSearch = (newQuery, errorMessage) => {
    if (errorMessage) {
      setError(errorMessage); // Если есть ошибка, показываем её
      toast.error(errorMessage); // Выводим тост с ошибкой
      return;
    }

    setQuery(newQuery);
    setImages([]);
    setCurrentPage(1);
  };

  const loadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />{" "}
      {/* Toaster для уведомлений */}
      <SearchBar onSubmit={handleSearch} />
      {/* Отображаем сообщение об ошибке, если оно есть */}
      {error && <ErrorMessage message={error} />}
      {/* Если нет ошибки, рендерим галерею */}
      {!error && <ImageGallery images={images} onImageClick={openModal} />}
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && <LoadMoreBtn onClick={loadMore} />}
      {selectedImage && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          image={selectedImage}
        />
      )}
    </div>
  );
};

export default App;
