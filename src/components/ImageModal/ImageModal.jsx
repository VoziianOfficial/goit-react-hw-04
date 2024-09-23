import React from "react";
import Modal from "react-modal";
import s from "./imageModal.module.css";

const ImageModal = ({ isOpen, onClose, image }) => {
  if (!image) return null; // Добавляем проверку, чтобы не рендерить модалку без изображения

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      ariaHideApp={false}
    >
      <img src={image.urls.regular} alt={image.alt_description} />
      <p>Автор: {image.user.name}</p>
      <p>Лайки: {image.likes}</p>
      <button className={s.closeBtn} onClick={onClose}>
        Close
      </button>
    </Modal>
  );
};

export default ImageModal;
