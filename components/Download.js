import React, {useState} from 'react'
import styles from '../styles/Download.module.scss'
import ImageUploading from 'react-images-uploading'
import Image from "next/image";
import { ButtonSvg} from "./ButtonSvg";
import uploadIcon from '../public/upload-line.svg';
import deleteIcon from '../public/delete.svg'

export const Download = () => {
    const [images, setImages] = useState([])

    const handleUploadImageChange = (imageList) => {
        setImages(imageList);
    };


    return <div className={styles.container}>
        <input className={styles.input} placeholder='Photo Gallery'/>
        <textarea className={styles.textarea} placeholder='Description'/>
        <ImageUploading
            dataURLKey="url"
            values={images}
            onChange={handleUploadImageChange}
        >
            {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps
              }) => <div className={styles.uploadWrapper}>
                {imageList}
                <div {...dragProps} className={styles.uploadArea} onClick={onImageUpload}>
                    {images.length > 0 ? images.map(img => <Image key={img.file.size} width={200} height={180}
                                                                  src={img.url} alt='Image'/>) :
                        <span className={styles.uploadAreaText}>Drag photos here</span>}
                </div>
                {images.length > 0 && <div className={styles.buttonsContainer}>
                    <ButtonSvg icon={uploadIcon.src} className={styles.uploadButton}/>
                    <ButtonSvg icon={deleteIcon.src} className={styles.clearButton} onClick={onImageRemove}/>
                </div>}
            </div>}
        </ImageUploading>
        <button className={styles.deleteButton}>Delete all photos</button>
    </div>
}