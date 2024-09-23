import { useState } from "react";
import toast from "react-hot-toast"; // Импортируем библиотеку для тостов
import s from "./searchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      // Если поле поиска пустое, показываем уведомление с ошибкой
      toast.error("Please enter a search term");
      return;
    }
    // Передаем запрос
    onSubmit(query);
    setQuery("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search images and photos"
          autoFocus
          className={s.input}
        />
        <button className={s.formBtm} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
