import React from "react";
import styles from "../styles/Dialog.module.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { handleCloseDialogAction } from "../redux/actions";

export const Dialog = () => {
  const dispatch = useDispatch();
  const { selectedImage, isOpenDialog } = useSelector((state) => state.gallery);

  const handleClose = () => {
    dispatch(handleCloseDialogAction());
  };

  return <> {isOpenDialog &&    <div
      className={styles.dialogWrapper}
  >
    <div className={styles.content}>
      <Image src={selectedImage} width={500} height={500} alt='Img'/>
      <button onClick={() => handleClose()} className={styles.closeButton}>
        X
      </button>
    </div>
  </div> }<
  />
};
