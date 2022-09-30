import React, {useEffect} from "react";
import styles from "../styles/Gallery.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {handleFetchImagesThunk, handleFetchInfoThunk, handleSetLoading} from "../redux/actions";
import {PhotoList} from "./PhotoList";
import {Loader} from "./Loader";

export const Gallery = ({}) => {
    const dispatch = useDispatch();
    const {title, description, photos, isLoading} = useSelector((state) => state.gallery);
    useEffect(() => {
        dispatch(handleFetchInfoThunk());
        dispatch(handleFetchImagesThunk());
        dispatch(handleSetLoading())
    }, []);

    return (
        <>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.photoContainer}>
                {photos.length > 0 && !isLoading ? (
                    <PhotoList photos={photos} itemsPerPage={9}/>
                ) : (
                    <div className={styles.empty}>{isLoading ? <Loader/> : <p>Please, add photos</p>}</div>
                )}
            </div>
        </>
    );
};
