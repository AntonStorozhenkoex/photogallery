import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { PhotoCard } from "./PhotoCard";
import arrowLeft from "../public/arrow-left.svg";
import arrowRight from "../public/arrow-right.svg";
import { ButtonIcon } from "./ButtonIcon";
import styles from "../styles/PhotoList.module.scss";

export const PhotoList = ({ itemsPerPage, photos }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);


  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(photos.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(photos.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, photos]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % photos.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className={styles.photoContainer}>
        {currentItems?.map((photo) => (
          <PhotoCard key={photo.id} src={photo.url} id={photo.id} />
        ))}
      </div>
      <ReactPaginate
        nextLabel={
          <ButtonIcon className={styles.button} icon={arrowRight.src} />
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        breakLabel="..."
        previousLabel={
          <ButtonIcon className={styles.button} icon={arrowLeft.src} />
        }
        renderOnZeroPageCount={null}
        className={styles.pagination}
        pageClassName={styles.pageCount}
      />
    </>
  );
};
