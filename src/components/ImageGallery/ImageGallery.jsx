import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import s from "./imageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={s.imageGallery}>
      {images.map((image) => (
        <li key={image.id} className={s.imageItem}>
          <ImageCard image={image} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
