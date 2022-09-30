import {
  ADD_IMAGE,
  CLOSE_DIALOG,
  DELETE_ALL_IMAGES,
  DELETE_IMAGE,
  FETCH_IMAGES,
  FETCH_INFO,
  OPEN_DIALOG,
  SELECT_IMAGE,
  SET_INFO,
} from "./types";
import PhotoGalleryApi from "../services/services";

export const handleSelectImageAction = (image) => {
  return { type: SELECT_IMAGE, payload: image };
};

export const handleOpenDialogAction = () => {
  return { type: OPEN_DIALOG };
};

export const handleCloseDialogAction = () => {
  return { type: CLOSE_DIALOG };
};

const handleFetchInfoAction = (data) => {
  return { type: FETCH_INFO, payload: data };
};

export const handleFetchInfoThunk = () => (dispatch) => {
  return PhotoGalleryApi.fetchInfo().then((res) => {
    dispatch(handleFetchInfoAction(res));
  });
};

const handleFetchImagesAction = (images) => {
  return { type: FETCH_IMAGES, payload: images };
};

export const handleFetchImagesThunk = () => (dispatch) => {
  return PhotoGalleryApi.fetchImages().then((res) => {
    dispatch(handleFetchImagesAction(res));
  });
};

const handleSetInfoAction = (data) => {
  return { type: SET_INFO, payload: data };
};

export const handleSetInfoThunk = (data) => (dispatch) => {
  return PhotoGalleryApi.setInfo(data).then((res) => {
    dispatch(handleSetInfoAction(res));
  });
};

const handleAddImageAction = (id,image) => {
  return { type: ADD_IMAGE, payload: image };
};

export const handleAddNewImageThunk = (data) => (dispatch) => {
  return PhotoGalleryApi.addNewImage(data).then((res) => {
    dispatch(handleAddImageAction(res));
  });
};

const handleDeleteImageAction = (id) => {
  return { type: DELETE_IMAGE, payload: id };
};

export const handleDeleteImageThunk = (id) => (dispatch) => {
  return PhotoGalleryApi.deleteImage(id).then((res) => {
    dispatch(handleDeleteImageAction(id));
  });
};

const handleDeleteAllImagesAction = () => {
  return { type: DELETE_ALL_IMAGES };
};

export const handleDeleteAllImagesThunk = (images) => (dispatch) => {
  return PhotoGalleryApi.deleteAllImages(images).then(() => {
    dispatch(handleDeleteAllImagesAction());
  });
};
