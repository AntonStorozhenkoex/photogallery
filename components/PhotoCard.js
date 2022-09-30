import React from "react";
import Image from "next/image";
import styles from "../styles/PhotoCard.module.scss";
import { useDispatch } from "react-redux";
import {
  handleDeleteImageThunk,
  handleOpenDialogAction,
  handleSelectImageAction,
} from "../redux/actions";
import { ButtonSvg } from "./ButtonSvg";
import deleteIcon from "../public/delete-white.svg";
import show from "../public/eye-line.svg";

export const PhotoCard = ({ id, src }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(handleDeleteImageThunk(id));
  };

  const handleShow = () => {
    console.log("here");
    dispatch(handleSelectImageAction(src));
    dispatch(handleOpenDialogAction());
  };

  return (
    <div className={styles.photoCard}>
      <Image src={src} width={90} height={90} alt={String(id)} />
      <div className={styles.buttonsContainer}>
        <ButtonSvg
          onClick={() => handleShow()}
          className={styles.cardButton}
          icon={show.src}
        />
        <ButtonSvg
          onClick={() => handleDelete(id)}
          className={styles.cardButton}
          icon={deleteIcon.src}
        />
      </div>
    </div>
  );
};
