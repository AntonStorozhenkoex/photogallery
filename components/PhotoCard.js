import React from "react";
import Image from "next/image";
import styles from "../styles/PhotoCard.module.scss";
import { useDispatch } from "react-redux";
import {
  handleDeleteImageThunk,
  handleOpenDialogAction,
  handleSelectImageAction,
} from "../redux/actions";
import { ButtonIcon } from "./ButtonIcon";
import deleteIcon from "../public/delete-white.svg";
import show from "../public/eye-line.svg";

export const PhotoCard = ({ id, src }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(handleDeleteImageThunk(id));
  };


  const handleShow = () => {
    dispatch(handleSelectImageAction(src));
    dispatch(handleOpenDialogAction());
  };

  return (
    <div className={styles.photoCard}>
      <Image src={src} width={90} height={90} alt={id} />
      <div className={styles.buttonsContainer}>
        <ButtonIcon
          onClick={() => handleShow()}
          className={styles.cardButton}
          icon={show.src}
        />
        <ButtonIcon
          onClick={() => handleDelete(id)}
          className={styles.cardButton}
          icon={deleteIcon.src}
        />
      </div>
    </div>
  );
};
