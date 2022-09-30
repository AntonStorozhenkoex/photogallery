import React, {useEffect, useState} from "react";
import Link from "next/link";
import styles from "../styles/Navigation.module.scss";
import {useRouter} from "next/router";

export const Navigation = () => {
    const router = useRouter()
    const [isHomeRoute, setIsHomeRoute] = useState(true)

    useEffect(() => {
        if (router.pathname === '/') {
            setIsHomeRoute(true)
        } else {
            setIsHomeRoute(false)
        }
    }, [router])

    return <ul className={styles.list}>
        <li className={styles.listItem}>
            <Link href="/">
                <a className={styles.listItemLink} style={{textDecoration: isHomeRoute && 'underline'}}>Download</a>
            </Link>
        </li>
        <li className={styles.listItem}>
            <Link href="/photogallery">
                <a className={styles.listItemLink} style={{textDecoration: isHomeRoute || 'underline'}}>Gallery</a>
            </Link>
        </li>
    </ul>
}

