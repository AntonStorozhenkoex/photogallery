import React from "react";
import Head from "next/head";
import styles from "../styles/Layout.module.scss";
import {Navigation} from "./Navigation";
import {Dialog} from "./Dialog";

export const Layout = ({title, children}) => <div className={styles.container}>
    <Head>
        <title>{title}</title>
        <link rel="icon" href="/picture.ico"/>
    </Head>
    <main className={styles.main}>
        <Navigation/>
        {children}
    </main>
    <Dialog/>
</div>
