import React, { useEffect, useState } from "react";
import styles from "../styles/Download.module.scss";
import ImageUploading from "react-images-uploading";
import Image from "next/image";
import { ButtonIcon } from "./ButtonIcon";
import uploadIcon from "../public/upload-line.svg";
import deleteIcon from "../public/delete.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAddNewImageThunk,
  handleDeleteAllImagesThunk,
  handleFetchImagesThunk,
  handleSetInfoThunk,
} from "../redux/actions";

export const Download = () => {
  const dispatch = useDispatch();
  const { photos } = useSelector((state) => state.gallery);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("Photo Gallery");
  const [description, setDescription] = useState("Description");

  useEffect(() => {
    dispatch(handleFetchImagesThunk());
  }, []);

  const handleUploadImageChange = (imageList) => {
    setImages(imageList);
  };

  const handleSubmit = () => {
    dispatch(handleSetInfoThunk({ title, description }));
    dispatch(handleAddNewImageThunk(images[0]));
  };

  const handleDeleteAllImages = () => {
    dispatch(handleDeleteAllImagesThunk(photos));
  };

  return (
    <>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={styles.textarea}
      />

      <ImageUploading
        dataURLKey="url"
        values={images}
        onChange={handleUploadImageChange}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          dragProps,
        }) => (
          <div className={styles.uploadWrapper}>
            {imageList}
            <div
              {...dragProps}
              className={styles.uploadArea}
              onClick={onImageUpload}
            >
              {images.length > 0 ? (
                images.map((img) => (
                  <Image
                    key={img.file.size}
                    width={200}
                    height={180}
                    src={img.url}
                    alt="Image"
                  />
                ))
              ) : (
                <span className={styles.uploadAreaText}>Drag photos here</span>
              )}
            </div>
            {images.length > 0 && (
              <div className={styles.buttonsContainer}>
                <ButtonIcon
                  icon={uploadIcon.src}
                  className={styles.uploadButton}
                  onClick={() => {
                    handleSubmit();
                    onImageRemove();
                  }}
                />
                <ButtonIcon
                  icon={deleteIcon.src}
                  className={styles.clearButton}
                  onClick={onImageRemove}
                />
              </div>
            )}
          </div>
        )}
      </ImageUploading>

      <button
        className={styles.deleteButton}
        onClick={() => handleDeleteAllImages()}
      >
        Delete all photos
      </button>
    </>
  );
};
