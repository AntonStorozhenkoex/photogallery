import React, { useEffect } from "react";
import styles from "../styles/Gallery.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { handleFetchImagesThunk, handleFetchInfoThunk } from "../redux/actions";
import { PhotoList } from "./PhotoList";

export const Gallery = ({}) => {
  const dispatch = useDispatch();
  const { title, description, photos } = useSelector((state) => state.gallery);

  useEffect(() => {
    dispatch(handleFetchInfoThunk());
    dispatch(handleFetchImagesThunk());
  }, []);

  return (
    <>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.photoContainer}>
        {photos?.length > 0 ? (
          <PhotoList photos={photos} itemsPerPage={9} />
        ) : (
          <p className={styles.empty}>Please, add photos</p>
        )}
      </div>
    </>
  );
};
