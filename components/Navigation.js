import React from "react";
import Link from "next/link";
import styles from "../styles/Navigation.module.scss";

export const Navigation = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <Link href="/">
          <a className={styles.listItemLink}>Download</a>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link href="/photogallery">
          <a className={styles.listItemLink}>Gallery</a>
        </Link>
      </li>
    </ul>
  );
};
